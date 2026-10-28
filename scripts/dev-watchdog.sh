#!/usr/bin/env bash
# Poll Maple AI dev server; restart LaunchAgent when port 3000 drops or web returns 500.
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
# shellcheck source=scripts/launch-agent-lib.sh
source "$REPO_ROOT/scripts/launch-agent-lib.sh"

WEB_PORT="${WEB_DEV_PORT:-3000}"
LOG="/tmp/maple-ai-dev-watchdog.log"
WEB_LABEL="com.maple-ai.web-dev"
WEB_PLIST="$HOME/Library/LaunchAgents/${WEB_LABEL}.plist"

log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') $*" >>"$LOG"
}

ensure_web() {
  if [[ ! -f "$WEB_PLIST" ]]; then
    bash "$REPO_ROOT/scripts/keep-web-3000.sh" install >/dev/null 2>&1 || true
  fi

  local needs_restart=0
  if ! lsof -nP -iTCP:"$WEB_PORT" -sTCP:LISTEN >/dev/null 2>&1; then
    log "web port ${WEB_PORT} not listening — restarting"
    needs_restart=1
  else
    local code
    code="$(curl -s -o /dev/null -w '%{http_code}' --max-time 5 "http://localhost:${WEB_PORT}/" 2>/dev/null || echo 000)"
    if [[ "$code" == "500" || "$code" == "000" ]]; then
      log "web returned HTTP ${code} — clearing .next and restarting"
      rm -rf "$REPO_ROOT/.next"
      needs_restart=1
    fi
  fi

  if [[ "$needs_restart" == "1" ]]; then
    ensure_launch_agent "$WEB_LABEL" "$WEB_PLIST" "$WEB_PORT" \
      || bash "$REPO_ROOT/scripts/keep-web-3000.sh" stable >>"$LOG" 2>&1
  elif ! launch_agent_loaded "$WEB_LABEL"; then
    log "web LaunchAgent unloaded — reloading"
    ensure_launch_agent "$WEB_LABEL" "$WEB_PLIST" "$WEB_PORT" || true
  fi
}

case "${1:-check}" in
  check)
    ensure_web
    ;;
  loop)
    log "watchdog loop started (interval ${WATCHDOG_INTERVAL:-30}s)"
    while true; do
      ensure_web
      sleep "${WATCHDOG_INTERVAL:-30}"
    done
    ;;
  *)
    echo "Usage: $0 [check|loop]" >&2
    exit 1
    ;;
esac

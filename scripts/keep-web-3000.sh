#!/usr/bin/env bash
# Keep Maple AI Technologies Next.js dev on :3000 stable (macOS LaunchAgent + watchdog).
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
# shellcheck source=scripts/launch-agent-lib.sh
source "$REPO_ROOT/scripts/launch-agent-lib.sh"

WEB_PORT="${WEB_DEV_PORT:-3000}"
LOG="/tmp/maple-ai-web-${WEB_PORT}.log"
LAUNCH_LABEL="com.maple-ai.web-dev"
LAUNCH_PLIST="$HOME/Library/LaunchAgents/${LAUNCH_LABEL}.plist"
RUN_SCRIPT="$REPO_ROOT/scripts/run-web-dev.sh"

install_launch_agent() {
  local template="$REPO_ROOT/scripts/com.maple-ai.web-dev.plist.template"
  mkdir -p "$HOME/Library/LaunchAgents"
  sed \
    -e "s|__REPO_ROOT__|${REPO_ROOT}|g" \
    -e "s|__RUN_WEB_DEV__|${RUN_SCRIPT}|g" \
    "$template" >"$LAUNCH_PLIST"
  chmod +x "$RUN_SCRIPT"
  echo "Installed LaunchAgent: ${LAUNCH_PLIST}"
}

start_launch_agent() {
  install_launch_agent
  ensure_launch_agent "$LAUNCH_LABEL" "$LAUNCH_PLIST" "$WEB_PORT"
}

stop_launch_agent() {
  stop_launch_agent_label "$LAUNCH_LABEL"
  rm -f "$LAUNCH_PLIST"
}

free_port() {
  local pids
  pids="$(lsof -tiTCP:"$WEB_PORT" -sTCP:LISTEN 2>/dev/null || true)"
  if [[ -n "$pids" ]]; then
    echo "Freeing port ${WEB_PORT}…"
    kill $pids 2>/dev/null || true
    sleep 1
  fi
}

case "${1:-stable}" in
  install)
    install_launch_agent
    ;;
  start)
    free_port
    start_launch_agent
    wait_for_port "$WEB_PORT" "$LAUNCH_LABEL"
    ;;
  stop)
    stop_launch_agent
    free_port
    echo "Stopped LaunchAgent and freed port ${WEB_PORT}"
    ;;
  status)
    if launch_agent_loaded "$LAUNCH_LABEL"; then
      echo "LaunchAgent: loaded"
    else
      echo "LaunchAgent: not loaded"
    fi
    if lsof -nP -iTCP:"$WEB_PORT" -sTCP:LISTEN >/dev/null 2>&1; then
      echo "Port ${WEB_PORT}: listening"
      lsof -nP -iTCP:"$WEB_PORT" -sTCP:LISTEN
    else
      echo "Port ${WEB_PORT}: not listening"
    fi
    if [[ -f "$LOG" ]]; then
      echo "Last log lines:"
      tail -3 "$LOG"
    fi
    ;;
  stable)
    free_port
    start_launch_agent
    wait_for_port "$WEB_PORT" "$LAUNCH_LABEL"
    echo "LaunchAgent keeps http://localhost:${WEB_PORT} alive (log: ${LOG})"
    echo "Watchdog monitors every 30s — log: /tmp/maple-ai-dev-watchdog.log"
    echo "Stop with: npm run dev:stop"
    ;;
  *)
    echo "Usage: $0 [stable|start|stop|status|install]" >&2
    exit 1
    ;;
esac

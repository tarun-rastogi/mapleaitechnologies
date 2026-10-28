#!/usr/bin/env bash
# Keep Maple AI dev watchdog running (polls web :3000 every 30s).
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
# shellcheck source=scripts/launch-agent-lib.sh
source "$REPO_ROOT/scripts/launch-agent-lib.sh"

LAUNCH_LABEL="com.maple-ai.dev-watchdog"
LAUNCH_PLIST="$HOME/Library/LaunchAgents/${LAUNCH_LABEL}.plist"
WATCH_SCRIPT="$REPO_ROOT/scripts/dev-watchdog.sh"
LOG="/tmp/maple-ai-dev-watchdog.log"

install_launch_agent() {
  local template="$REPO_ROOT/scripts/com.maple-ai.dev-watchdog.plist.template"
  mkdir -p "$HOME/Library/LaunchAgents"
  sed \
    -e "s|__REPO_ROOT__|${REPO_ROOT}|g" \
    -e "s|__DEV_WATCHDOG__|${WATCH_SCRIPT}|g" \
    "$template" >"$LAUNCH_PLIST"
  chmod +x "$WATCH_SCRIPT"
  echo "Installed watchdog LaunchAgent: ${LAUNCH_PLIST}"
}

start_launch_agent() {
  install_launch_agent
  ensure_launch_agent "$LAUNCH_LABEL" "$LAUNCH_PLIST" 0
}

stop_launch_agent() {
  stop_launch_agent_label "$LAUNCH_LABEL"
  rm -f "$LAUNCH_PLIST"
}

case "${1:-stable}" in
  install)
    install_launch_agent
    ;;
  start|stable)
    start_launch_agent
    bash "$WATCH_SCRIPT" check
    echo "Watchdog running (checks every 30s, log: ${LOG})"
    ;;
  stop)
    stop_launch_agent
    echo "Stopped dev watchdog"
    ;;
  status)
    if launch_agent_loaded "$LAUNCH_LABEL"; then
      echo "Watchdog LaunchAgent: loaded"
    else
      echo "Watchdog LaunchAgent: not loaded"
    fi
    if [[ -f "$LOG" ]]; then
      echo "Last log lines:"
      tail -3 "$LOG"
    fi
    ;;
  check)
    bash "$WATCH_SCRIPT" check
    ;;
  *)
    echo "Usage: $0 [stable|start|stop|status|install|check]" >&2
    exit 1
    ;;
esac

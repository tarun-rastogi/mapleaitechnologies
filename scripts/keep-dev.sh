#!/usr/bin/env bash
# Start Maple AI Technologies web (:3000) via macOS LaunchAgents (survives IDE restarts).
set -uo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

case "${1:-stable}" in
  stable)
    bash "$REPO_ROOT/scripts/keep-web-3000.sh" stable
    bash "$REPO_ROOT/scripts/keep-dev-watchdog.sh" stable
    echo ""
    echo "Maple AI Technologies dev server is running:"
    echo "  Web → http://localhost:3000"
    echo "  Watchdog checks every 30s (auto-restart if down)"
    echo "Stop with: npm run dev:stop"
    ;;
  stop)
    bash "$REPO_ROOT/scripts/keep-dev-watchdog.sh" stop
    bash "$REPO_ROOT/scripts/keep-web-3000.sh" stop
    ;;
  status)
    echo "=== Web ==="
    bash "$REPO_ROOT/scripts/keep-web-3000.sh" status
    echo ""
    echo "=== Watchdog ==="
    bash "$REPO_ROOT/scripts/keep-dev-watchdog.sh" status
    ;;
  *)
    echo "Usage: $0 [stable|stop|status]" >&2
    exit 1
    ;;
esac

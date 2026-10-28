#!/usr/bin/env bash
set -euo pipefail
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
# shellcheck source=scripts/launch-agent-lib.sh
source "$REPO_ROOT/scripts/launch-agent-lib.sh"

export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
if [[ -s "$NVM_DIR/nvm.sh" ]]; then
  # shellcheck source=/dev/null
  . "$NVM_DIR/nvm.sh"
fi

cd "$REPO_ROOT"
export WEB_DEV_PORT="${WEB_DEV_PORT:-3000}"
ensure_web_next_cache "$REPO_ROOT"
exec npm run dev

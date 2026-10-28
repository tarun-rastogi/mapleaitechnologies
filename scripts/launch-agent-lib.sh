#!/usr/bin/env bash
# Shared helpers for Maple AI Technologies LaunchAgents (web :3000, watchdog).
set -uo pipefail

launch_agent_domain() {
  echo "gui/$(id -u)"
}

launch_agent_loaded() {
  local label="$1"
  launchctl print "$(launch_agent_domain)/${label}" >/dev/null 2>&1
}

ensure_launch_agent() {
  local label="$1"
  local plist="$2"
  local port="${3:-}"
  local domain
  domain="$(launch_agent_domain)"

  if launch_agent_loaded "$label"; then
    if [[ -n "$port" && "$port" != "0" ]] && ! lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
      launchctl kickstart -k "${domain}/${label}" 2>/dev/null || true
    fi
    return 0
  fi

  local attempt
  for attempt in 1 2 3 4 5; do
    launchctl bootout "${domain}/${label}" 2>/dev/null || true
    if launchctl bootstrap "$domain" "$plist" 2>/dev/null; then
      launchctl enable "${domain}/${label}" 2>/dev/null || true
      launchctl kickstart "${domain}/${label}" 2>/dev/null \
        || launchctl kickstart -k "${domain}/${label}" 2>/dev/null \
        || true
      return 0
    fi
    sleep 2
  done

  echo "Failed to bootstrap LaunchAgent ${label} after 5 attempts" >&2
  return 1
}

stop_launch_agent_label() {
  local label="$1"
  launchctl bootout "$(launch_agent_domain)/${label}" 2>/dev/null || true
}

wait_for_port() {
  local port="$1"
  local label="$2"
  local seconds="${3:-90}"
  local i
  for ((i = 1; i <= seconds; i++)); do
    if lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
      echo "Ready on http://localhost:${port}"
      return 0
    fi
    if (( i % 15 == 0 )) && launch_agent_loaded "$label"; then
      launchctl kickstart -k "$(launch_agent_domain)/${label}" 2>/dev/null || true
    fi
    sleep 1
  done
  echo "Timed out waiting for http://localhost:${port}" >&2
  return 1
}

ensure_web_next_cache() {
  local repo_root="$1"
  local next_dir="${repo_root}/.next"
  local log="/tmp/maple-ai-web-${WEB_DEV_PORT:-3000}.log"
  if [[ -d "$next_dir" ]]; then
    if [[ ! -f "${next_dir}/BUILD_ID" ]]; then
      rm -rf "$next_dir"
      return
    fi
    if [[ -f "$log" ]] && tail -200 "$log" | grep -q "app-build-manifest.json"; then
      rm -rf "$next_dir"
    fi
  fi
}

#!/usr/bin/env bash
set -euo pipefail

HOST="${HOST:-127.0.0.1}"
START_PORT="${START_PORT:-8096}"
END_PORT="${END_PORT:-8106}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

for port in $(seq "$START_PORT" "$END_PORT"); do
  if python3 - <<'PY' "$HOST" "$port" >/dev/null 2>&1; then
import socket, sys
host = sys.argv[1]
port = int(sys.argv[2])
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    sock.settimeout(0.2)
    try:
        sock.bind((host, port))
    except OSError:
        raise SystemExit(1)
PY
    echo "Serving ${DIR} at http://${HOST}:${port}"
    exec python3 -m http.server "$port" --bind "$HOST" --directory "$DIR"
  fi
done

echo "No free port found in ${START_PORT}-${END_PORT}" >&2
exit 1

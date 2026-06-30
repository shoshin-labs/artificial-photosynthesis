#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "$0")" && pwd)"
HOST="${HOST:-127.0.0.1}"
START_PORT="${PORT:-8095}"
END_PORT=$((START_PORT + 25))

port_is_free() {
  python3 - "$1" "$HOST" <<'PY'
import socket, sys
port = int(sys.argv[1])
host = sys.argv[2]
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    try:
        sock.bind((host, port))
    except OSError:
        raise SystemExit(1)
raise SystemExit(0)
PY
}

PORT_CHOSEN=""
for candidate in $(seq "$START_PORT" "$END_PORT"); do
  if port_is_free "$candidate"; then
    PORT_CHOSEN="$candidate"
    break
  fi
done

if [[ -z "$PORT_CHOSEN" ]]; then
  echo "No free port found between $START_PORT and $END_PORT" >&2
  exit 1
fi

echo "Serving Made from Air at http://$HOST:$PORT_CHOSEN/index.html"
echo "Library page: http://$HOST:$PORT_CHOSEN/library.html"
exec python3 -m http.server "$PORT_CHOSEN" --bind "$HOST" --directory "$DIR"

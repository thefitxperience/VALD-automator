#!/bin/bash
# This script is for macOS Automator drag-and-drop

SCRIPT_DIR="/Users/andyayas/VALD Automator"
PYTHON="$SCRIPT_DIR/.venv/bin/python"

for f in "$@"; do
    "$PYTHON" "$SCRIPT_DIR/process_dynamo.py" "$f"
done

#!/bin/bash
# This script is for macOS Automator drag-and-drop

REPO="/Users/andyayas/VALD Automator"
SCRIPT_DIR="$REPO/legacy-desktop-tool"
PYTHON="$REPO/.venv/bin/python"

for f in "$@"; do
    "$PYTHON" "$SCRIPT_DIR/process_dynamo.py" "$f"
done

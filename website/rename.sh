#!/bin/bash

# Directory to search for .md files
SEARCH_DIR="$1"

# Check if a directory is provided
if [ -z "$SEARCH_DIR" ]; then
  echo "Usage: $0 <directory>"
  exit 1
fi

# Find and rename .md files to .mdx
find "$SEARCH_DIR" -type f -name "*.md" -exec sh -c '
for file do
  mv -- "$file" "${file%.md}.mdx"
done
' sh {} +

echo "Renaming completed."

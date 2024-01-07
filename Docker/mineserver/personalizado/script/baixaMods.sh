#!/bin/bash
if [ -e "$DIRMODS/mods.txt" ] && ls "$DIRMODS"/*.jar 1>/dev/null 2>&1; then
  while IFS= read -r URL; do
    if [ -n "$URL" ]; then
      echo "Essa é a url: $URL"
      wget -P "$SERVERMODS" "$URL"
    fi
  done < "$DIRMODS/mods.txt"
  
  mv -v "$DIRMODS"/*.jar "$SERVERMODS"

elif [ -e "$DIRMODS/mods.txt" ]; then
  while IFS= read -r URL; do
    if [ -n "$URL" ]; then
      wget -P "$SERVERMODS" "$URL"
    fi
  done < "$DIRMODS/mods.txt"
else
  echo "Nenhum mod personalizado"
fi

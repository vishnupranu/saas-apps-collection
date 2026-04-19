#!/bin/bash

echo "Stopping all applications..."

for dir in */; do
    if [ -f "$dir/docker-compose.yml" ]; then
        echo "Stopping $dir..."
        cd "$dir"
        docker-compose down
        cd ..
    fi
done

echo "All applications stopped!"

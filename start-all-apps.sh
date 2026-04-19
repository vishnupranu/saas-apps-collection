#!/bin/bash

echo "Starting all applications..."

for dir in */; do
    if [ -f "$dir/docker-compose.yml" ]; then
        echo "Starting $dir..."
        cd "$dir"
        docker-compose up -d
        cd ..
    fi
done

echo "All applications started!"
echo "Access Traefik dashboard at: http://localhost:8080"

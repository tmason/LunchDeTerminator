#!/bin/bash

# Check if the service container is running
docker ps | grep deTerminator

# If yes, stop it
if [ $? -eq 0 ]; then
  docker stop deTerminator
fi

# Check if the service container is stopped
docker ps -a | grep deTerminator

# If yes, delete it
if [ $? -eq 0 ]; then
  docker rm -fv deTerminator
fi

# There is no container for this service

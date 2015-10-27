#!/bin/bash

# Make sure the service container is running and properly configured
docker inspect deTerminator

# Verify the service inside the container is healthy
curl -i http://localhost:8080/health

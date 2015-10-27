#!/bin/bash

# Pull a specific version of the docker image for this service
# REPLACE_VERSION is replaced at build time with a build number
docker pull docker-registry.360incentives.io:5000/deTerminator:REPLACE_VERSION

# Get the latest environment files for this service from git
echo "Pulling in latest environmentFiles..."
cd /environmentFiles && git pull

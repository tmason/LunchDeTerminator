#!/bin/bash

# Source system-wide environment variables, including SERVICE_ENV
. /etc/environment

# Run a container based on a specific version of the service image
# -d        - run in detached mode
# -p        - publish the container service port to the host port 8080; this is used by the ELB to determine instance health
# -e        - set environment variables used by the container; see run.sh for how these variables are used
# -v        - mount the host environment files directory for this service inside the container; see run.sh for usage
# --name    - a name is required to reference this container using the docker client
# --restart - restart the container when it exits with a non-zero code; try ten times, then stop

echo "Starting the deTerminator container..."
docker run -d \
  -p 8080:8080 \
  --name deTerminator \
  --restart=on-failure:10 \
  -e SERVICE_ENV=$SERVICE_ENV \
  -e ELASTICSEARCH_HOST=elasticsearch.$SERVICE_ENV.360incentives.io \
  -v /environmentFiles/deTerminator.$SERVICE_ENV:/config \
  docker-registry.360incentives.io:5000/deTerminator:REPLACE_VERSION

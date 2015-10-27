FROM docker-registry.360incentives.io:5000/node-service-base:0.10.x
MAINTAINER 360incentives

# add service code
COPY ./ /app
WORKDIR /app
RUN chown -R service:service /app

CMD ["/bin/bash", "/run.sh", "deTerminator"]

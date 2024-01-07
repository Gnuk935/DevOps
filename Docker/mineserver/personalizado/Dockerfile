FROM alpine:latest
RUN apk update && \
    apk add bash curl openjdk17-jre 
   
EXPOSE 25565
VOLUME ["/data"]
WORKDIR /data
---
layout: default
date: 2022-10-05
title: Docker Basics - Cheatsheet
series: docker
tags:
  - Docker
  - DevOps
---
# Cheatsheet - docker commands

build an image with a dockerfile:

```
docker build -t <imageTagName><host-path-that-contains-dockerfile>
```
run a docker image (start a container) with terminal in detached mode and listening to a port:

```
docker run -dp <host-port>:<container-port> <imageTagName>
```

list the current containers

```
docker ps
```

stop a container with its container-id:

```
docker stop <container-id>
```

delete a container with its container-id

```
docker rm <container-id>
```

login to docker hub with username

```
docker login -u <username>
```

tag a local image with a name:

```
docker tag <local-image:tagname> <docker-hub-namespace>/repo-name:tagname
```

push the local image to dockerhub

```
docker push <docker-hub-namespace>/repo-name:tagname
```

create a docker volume

```
docker create volume <volume-name>
```

run a docker image with an image name in terminal-detached mode and listening to a port and a volume

```
docker run -dp <host-port>:<container-port> -v <volume-name>:<container-data-path> <imageTagName>
```

inspect the info of a volume

```
docker volume inspect <volume-name>
```
run a docker image with an image name in terminal-detached mode and listening to a port, with the container content binds to a host path

```
docker run -dp <host-port>:<container-port> -v <host-data-path>:<container-data-path> <imageTagName>
```
run a docker image with an image name in terminal-detached mode and listening to a port, with the current working path binds to the container's work dir and run a command

```
docker run -dp <host-port>:<container-port> -w <WORKDIR> -v ${PWD}:<WORKDIR> <imageTagName> sh -c "npm install && npm run dev"
```



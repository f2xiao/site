---
layout: default
date: 2022-10-05
title: Docker Basics - Container
series: docker
tags:
  - Docker
  - DevOps
---
# Create a container

container: a process that's isolated from other processes on the host computer, it uses an isolated filesystem

filesystem: provided by a container image

image: 
- contains everything needed to run an application, such as all dependencies, source code, configurations, scripts and binaries
- contains Dockerfile or docker-compose.yml

dockerfile:contains instructions for creating a Docker container

## Docker commands

pull an image from the registry and run the image:

```
docker run -d -p 80:80 docker/getting-started
```

This command contains the following parameters:
- -d -run the container in detached mode (in background)
- -p 80:80 -map `<host-port>` to `<container-port>`
- docker/getting-started -the image to use

to stop and remove a container:

```
docker stop <container-id>
```
```
docker rm <container-id>
```

## Build a container image for the app

to build an image for an app, we need a Dockerfile, then run the following command to build a container image

```
docker build -t <tagAsFriendlyimageName> <host-path-where-to-find-dockerfile>
```

## Start an app container
```
docker run -dp <host-port>:<container-port> <imagetagname> 
```

## Update the code and replace the container

stop and remove the old container then build the updated version of the image and start a new container with the updated image

## Share your image
1. login to the docker hub 

    ```
    docker login -u <username>
    ```
2. create a repo with `<repoName>`{.plaintext}, then rename your local image with the same name as the `<username>/<repoName>`{.plaintext}

    ```
    docker tag local-image:tagname new-repo:tagname
    ```  
3. push your local image to the docker hub
    ``` 
    docker push new-repo:tagname
    ```
    ```
    docker push <username>/<repoName>
    ```
## Run the image on a new instance
1. open browser to play with docker

2. sign in to you docker hub

3. use commands to run an image from your namespace on docker hub
 


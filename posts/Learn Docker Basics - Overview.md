---
layout: default
date: 2022-10-05
title: Docker Basics - Overview
series: docker
tags:
  - Docker
  - DevOps
---
# Overview

docker: an open source platform for developing, shipping and running applications within containers

container: a standard unit of loosely isolated environment for distributing and testing application

## docker architecture
client-server architecture:
 - client: docker client, docker compose
 - server: docker daemon

## docker daemon
listens for Docker API requests and manages Docker objects such as imgaes, containers, volumes and networks

## docker client
the primary way that Docker user interact with the Docker, when docker user types docker CLI commands, docker client communicates with docker daemon to pass on the requests for docker daemon to execute them.

## docker desktop
an easy to install application on Mac or Windows environment that enables you to build and share containerized apps and microservices, it includes Docker client, Docker compose, Docker daemon, docker content trust, Kubernets and Credential helper.

## docker registries
docker registry stores docker image, places for users to share images

## docker objects

### images
read-only template with instructions for creating a Docker container

### container
a runnable instance of an image

## Create and share a Docker app

create and run containers, presist data, and deploy the containerized app to Azure:
1. create and deploy docker app
2. update and share the containerized app

docker: a standard container provider and container management system

container: compact virtualized environments, aka a process, like VM, to provide a platform for building and running app

docker-desktop: runs on your computer and manage local containers

vs-code-extension-(docker&remote-container): let you work with a local Docker Desktop service:
- create containerized app
- deploy apps to containers
- debug apps running on your containers


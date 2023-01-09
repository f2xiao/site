---
layout: default
date: 2022-10-05
title: Docker Basics - Presist Data
series: docker
tags:
  - Docker
  - DevOps
---
# Presist data in a container app
two ways to presist data: named volumes and bind mounts
 
data: represents the file data, including the source code(database file), dockfile, etc...

## Use named volumes
 
volume/named volume: a named logical area of the physical disk
Docker maintains the physical location the volume is on the disk, refers to the name of the volume, and docker provides the right data:
 
 1. create a volume

    ```
    docker create volume <volume-name>
    ```
 2. specify the volume with its name to be mounted on the location with container folder path

    ```
    docker run -dp <host-port>:<container-port> -v <volumename>:<container-path> <image-tag-name>
    ``` 
    sync `<container-path>` to `<volume-name>` (named volume) or sync `<container-path>` to `<host-path>` (bind mounts)
 
 3. inspect the data
    ``` 
    docker volume inspect <volume-name>
    ``` 
## Use bind mounts
bind mounts syncs `<container-path>` to a mountpoint on the host, aka `<host-path>`

benefits: provide more data into containers

usage senario: use a bind mount to mount source code on the host into the container with `-v <host-mountpoint>:<container-path>` while run the image (create a container), make some code changes in the host source code file, docker will automatically detect the changes, and rebuid and re-run the image with the updated files

## Cache dependencies

### layer in the image
A Docker image consists of read-only layers each of which represents a Dockerfile instruction. The layers are stacked and each one is a delta of the changes from the previous layer. 

### writable layer in the image, aka container layer
When you run an image and generate a container, you add a new writable layer (the “container layer”) on top of the underlying layers. All changes made to the running container, such as writing new files, modifying existing files, and deleting files, are written to this writable container layer.

### cache source code dependencies
Once a layer changes, all downstream layers have to be recreated as well. So we don't want any code changes in the app code (excludes the app dependencies, i.e all source code files excluding the package.json file) to trigger the recreation of the app dependencies layer( i.e. package.json file) so the source code layer should be created after the app dependencies layer is created.

When build a image with the dockerfile, cache happens with each layer in the image and docker will use cache as much as possible if no changes made in each layer.
 
So if the app code is copied into the container before installing app dependencies, any changes in the app code will trigger new installation of app dependencies, which significantly slow down the time to re-build the container.
 
So we want the app dependencies layer to be created before the app code layer:

1. prepare dockerfile as following:
    ```
    FROM node:12-alpine
    WORKDIR /app
    COPY package.json yarn.lock ./
    RUN yarn install --production 
    COPY . .
    CMD ["node", "/app/src/index.js"]
    ```
    make sure the package.json file contains nodemon so the app restarts after code changes
 
2. build the image

    ```
    docker build -t <imagetagname> .
    ```

3. run the image and run the command to install dependencies

    ```
    docker run -dp <host-port>:<container-port> -w <WORKDIR> -v ${PWD}:<WORKDIR> sh -c "yarn install && yarn run dev" 
    ```

    NOTE: when use `-v ${PWD}:<WORKDIR>` the `<WORKDIR>` in the container will be overwrite byy the `${PWD}` so the `node_module/` created during the image build process will be deleted if there is no `node_module/` in the `${PWD}`on the host.
 
## Multi-stage builds

### React example
```html
 # stage 1: node environment
 # base image: node
 FROM
 WORKDIR
 # app dependencies
 COPY
 RUN
 # static html and css
 COPY
 # app code
 COPY
 # compile JS, SASS into static JS, hmtl and css 
 RUN
 
 # stage 2: production environment
 # base imgae: nginx
 FROM
 # compiled JS, html and css
 COPY --from=build host-path container-path
```
## Deploy app to Azure
 
1. create an Azure Container Instance Context: newcontextname->resourcegroup

    the ACI context will show under CONTEXTS

2.  Use the ACI context
 
    ```
    docker use <newacicontext-name>
    ```
 
3. run the remote image in the cloud from hub.docker.com

    ```
    docker run -dp <host-port>:<container-port> registry.<website-name>/<username>/<imageTagName>
    ```
    
    ```
    docker run -dp <host-port>:<container-port> registry.hub.docker.com/<username>/<imageTagName>
    ```
    
    ```
    docker run -dp <host-port>:<container-port> registry.hub.docker.com/library/<imageTagName>
    ```


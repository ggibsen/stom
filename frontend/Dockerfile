# Docker creates many image layers, sending this entire build context to docker server
# .dockerignore will exclude sending specified files to server

# What (type) image we want to build?   get version of node from Docker Hub/store
FROM node:8.9-alpine
# for production deploy, env var for node
ENV NODE_ENV production
# specify dir to hold our app's code inside the image
# this is the build context
WORKDIR /usr/src/app

# Add app dependency list to image
COPY package*.json ./
# building your dependencies for production
RUN npm install --production --silent

# Add client assests to image, to get the bundled client side asset
COPY public public/
COPY src src/
RUN npm run build

# get server side assets into image
COPY server.js ./

# the port that Docker container should export, mapping it to Docker daemon
EXPOSE 8081
# Tell Docker how to run the app
CMD node server.js

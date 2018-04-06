# What (type) image we want to build?   get version of node from Docker Hub
FROM node:8.9-alpine
# for production deploy, env var for node
ENV NODE_ENV production
# specify dir to hold our app's code inside the image
WORKDIR /usr/src/app
# Install app dependencies
COPY frontend/package*.json ./
# building your code for production
RUN npm install --production --silent && mv node_modules ../
#RUN npm run build
# Bundle app source, I think .dockerignore will ignore specified files
# TODO I think if i delete my build dir, then this docker container will NOT have the assets needed by server.js
COPY frontend/ .
#COPY build .
# the port that Docker container should export, mapping it to Docker daemon
EXPOSE 8081
# Tell Docker how to run the app
CMD node server.js

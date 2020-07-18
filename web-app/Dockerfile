# get the base image
FROM node:alpine

WORKDIR /usr/app

#install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./


#give start command
CMD ["npm","start"]
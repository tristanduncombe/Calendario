FROM node:lts-alpine as build-stage
WORKDIR /backend

COPY package*.json ./
RUN npm install
COPY . .
RUN node index.js
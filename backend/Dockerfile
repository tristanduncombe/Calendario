FROM node:16 as build
WORKDIR /app
COPY . .
EXPOSE 9000
ENV TZ=Australia/Brisbane
RUN yarn install
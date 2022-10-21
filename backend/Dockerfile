# Specifies the image of your engine
FROM node:12.20.0

# The working directory inside your container
WORKDIR /backend

# Get the package.json first to install dependencies
COPY package.json /backend

# This will install those dependencies
RUN npm install

# Copy the rest of the app to the working directory
COPY . /backend
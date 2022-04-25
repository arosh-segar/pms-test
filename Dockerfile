FROM node:alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copying source files
COPY . /usr/src/app

# Installing dependencies
RUN npm install

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD npm start
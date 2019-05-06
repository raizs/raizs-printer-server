FROM alpine:latest

WORKDIR /usr/src/app

COPY package*.json ./

# Install Nodejs and NPM
RUN apk add --update nodejs nodejs-npm mongodb-tools

# Install dependecies
RUN npm install

COPY . .

EXPOSE 3301

CMD [ "npm", "start" ]

FROM node:12.13.0-alpine

EXPOSE 3000
WORKDIR /app

COPY package.json .
COPY . .

RUN npm install

CMD node server.js

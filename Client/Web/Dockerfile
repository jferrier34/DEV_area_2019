# base image
FROM node:12.13.0-alpine

EXPOSE 4200

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.9

# add app
COPY . .

# start app
CMD cp /common/client.apk src/assets/client.apk && ng serve --host 0.0.0.0 --disableHostCheck --ssl=true --sslCert=/ssl/fullchain.pem --sslKey=/ssl/privkey.pem

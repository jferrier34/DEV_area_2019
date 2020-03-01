FROM node:12.13.0-alpine

EXPOSE 8000

RUN npm i -g @ionic/cli
RUN npm i -g native-run
RUN npm i -g cordova

WORKDIR /app

COPY . .

RUN npm install

CMD cp apk/*.apk /common/client.apk && ionic cordova platform add browser && ionic cordova run browser --no-native-run --address 0.0.0.0 -- --disableHostCheck true

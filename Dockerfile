FROM node:13.3.0

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

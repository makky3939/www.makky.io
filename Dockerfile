FROM node:11.11.0

COPY . /

RUN npm i

RUN npm run build

CMD npm run server
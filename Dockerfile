FROM node:7.9

COPY . /

RUN npm i

RUN npm run build

CMD npm run server
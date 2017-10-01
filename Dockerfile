FROM node:8.6

COPY . /

RUN npm i

RUN npm run build

CMD npm run server
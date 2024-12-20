FROM node:22-alpine

COPY app /usr/app
WORKDIR /usr/app

RUN npm install

EXPOSE 3000

CMD npm start

FROM node:10.16.3-alpine

ENV NODE_ENV=development

RUN npm i -g nodemon

WORKDIR /travel-together
COPY ./package.json .
RUN npm install

COPY . .

CMD npm start
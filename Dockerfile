FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3001

RUN yarn build

CMD [ "node", "dist/server.js" ]
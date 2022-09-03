FROM node:17

WORKDIR /usr/app

COPY . .

RUN yarn install

CMD ["yarn", "start:production"]

FROM node:lts-alpine

ENV NODE_ENV=production
WORKDIR /opt/app

COPY . .

CMD ["yarn", "start"]
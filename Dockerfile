FROM node:lts-alpine

ENV NODE_ENV=production
WORKDIR /opt/app

COPY . .

CMD ["node_modules/.bin/next", "pm-start"]
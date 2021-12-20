FROM node:17-alpine3.12
ENV APP_ROOT /app
ENV PATH ${APP_ROOT}/node_modules/.bin:$PATH
WORKDIR $APP_ROOT
COPY . .

RUN yarn

CMD ["yarn", "start"]

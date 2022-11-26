# Build stage
FROM node:18-alpine AS build

RUN apk update

RUN mkdir /app
COPY ./ /app
WORKDIR /app

RUN npm install
RUN npm run 'build'


# Run stagge
FROM node:18-alpine

RUN apk update

RUN mkdir /app
RUN mkdir /app
WORKDIR /apP

COPY --from=build /app/.output /app/.output

EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]
### STAGE 1: Build ###
FROM node:18.10.0-alpine AS build

ARG APP_WORKDIR=/usr/src/app
WORKDIR /usr/src/app

ENV VITE_API_URL="1"
ENV VITE_API_URL_AUTH="1"

COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build:prod

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY --from=build /usr/src/app/build/config/nginx/default.conf /etc/nginx/conf.d/
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]

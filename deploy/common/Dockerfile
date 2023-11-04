### STAGE 1: Build ###
FROM node:18.10.0-alpine AS build
ARG ENV
ARG k8s_env
# ENV VITE_API_URL https://autohiring-ingress-controller.autohiring.svc.k8s.dldevel/webapi/api/v1
# ENV VITE_API_URL_AUTH https://auth-stage-autohiring.wildberries.ru/v2

WORKDIR /usr/src/app
RUN echo $ENV
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build:${k8s_env}
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY --from=build /usr/src/app/build/config/nginx/default.conf /etc/nginx/conf.d/
# CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/settings.template.json > /usr/share/nginx/html/assets/settings.json && exec nginx -g 'daemon off;'"]

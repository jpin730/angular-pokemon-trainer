FROM node:18.17.1-alpine AS build
WORKDIR /app
COPY . .
RUN npm ci --ignore-scripts
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist/angular-pokemon-trainer/ /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
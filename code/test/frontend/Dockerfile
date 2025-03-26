
# Stufe 1: Angular Build
FROM node:20 AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli  # Installiere die Angular CLI global
RUN npm run build --prod


# Stufe 2: Nginx als Webserver
FROM nginx:alpine

COPY --from=build app/dist/frontend/browser/. /usr/share/nginx/html/
#COPY --from=build app/dist/frontend/browser/index.html /usr/share/nginx/html/index.html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Schritt 1: Angular App bauen
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Schritt 2: Nginx als Webserver für Angular
FROM nginx:alpine
COPY --from=build /app/dist/my-angular-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]



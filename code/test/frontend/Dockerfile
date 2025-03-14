FROM node:22.14.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

FROM nginx:1.19.6-alpine
COPY --from=build /app/frontend /usr/share/nginx/html
EXPOSE 80

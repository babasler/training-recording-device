# Stage 1: Build mit Node.js (ARM-kompatibel)
FROM arm32v7/node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm install --save-dev esbuild-linux-arm
RUN npm run build --prod

# Stage 2: Production mit NGINX (ARM-kompatibel)
FROM arm32v7/nginx:1.25-alpine
COPY --from=builder /app/dist/frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80


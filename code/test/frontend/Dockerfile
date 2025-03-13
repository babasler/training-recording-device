# Basis-Image mit Node.js
FROM node:18-alpine

# Arbeitsverzeichnis im Container
WORKDIR /app

# Abhängigkeiten installieren
COPY package.json package-lock.json ./
RUN npm install

# Kopiere den Rest der App
COPY . .

# Port freigeben
EXPOSE 4200

# Startbefehl für Angular-Entwicklung (Hot-Reload)
CMD ["npm", "start"]


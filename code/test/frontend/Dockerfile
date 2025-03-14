FROM node:14-alpine

# Apache installieren
RUN apk add --no-cache apache2

# Arbeitsverzeichnis setzen
WORKDIR /usr/src/app

# package.json und package-lock.json kopieren
COPY package*.json ./

# npm Pakete installieren
RUN npm install

# Restliche Anwendungsdateien kopieren
COPY . .

# Apache konfigurieren und starten
CMD httpd -D FOREGROUND

# Node.js-Image als Basis verwenden
FROM node:14-alpine

# Apache und notwendige Build-Tools installieren
RUN apk add --no-cache apache2 build-base

# Arbeitsverzeichnis setzen
WORKDIR /usr/src/app

# package.json und package-lock.json kopieren
COPY package*.json ./

# npm Pakete installieren
RUN npm install

# Restliche Anwendungsdateien kopieren
COPY . .

# Angular-App bauen
RUN npm run build

# Apache konfigurieren
COPY apache.conf /etc/apache2/httpd.conf

# Angular-App in Apache-Verzeichnis kopieren
RUN cp -r dist/frontend/* /var/www/localhost/htdocs/

EXPOSE 80

# Apache starten
CMD ["httpd", "-D", "FOREGROUND"]

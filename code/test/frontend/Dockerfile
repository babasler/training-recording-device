FROM node:14-alpine

# Apache installieren
RUN apk add --no-cache apache2

# Arbeitsverzeichnis setzen
WORKDIR /usr/src/app

COPY /dist/frontend /usr/local/apache2/htdocs/
COPY apache.conf /usr/local/apache2/conf/httpd.conf


# package.json und package-lock.json kopieren
COPY package*.json ./

# npm Pakete installieren
RUN npm install

# Restliche Anwendungsdateien kopieren
COPY . .

EXPOSE 80

# Apache konfigurieren und starten
CMD httpd -D FOREGROUND

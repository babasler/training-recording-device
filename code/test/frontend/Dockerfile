# Basis-Image mit Apache
FROM httpd:latest

# Kopiere das Angular-Build in den Apache-Ordner
COPY dist/my-angular-app/ /usr/local/apache2/htdocs/

# Konfiguration für Angular Routing (optional)
COPY apache.conf /usr/local/apache2/conf/httpd.conf

# Exponiere den Port
EXPOSE 80

# Starte den Apache-Server
CMD ["httpd", "-D", "FOREGROUND"]


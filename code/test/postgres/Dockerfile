# Verwende das offizielle PostgreSQL-Image
FROM postgres:15

# Erstelle einen Ordner für Daten oder Initialisierungsskripte (optional)
# und setze die Rechte auf den Postgres-User
RUN mkdir -p /var/lib/postgresql/data && \
    chown -R postgres:postgres /var/lib/postgresql/data

# Falls du ein Init-Skript kopieren willst:
# COPY ./init.sql /docker-entrypoint-initdb.d/

# Exponiere den Standard-Port
EXPOSE 5432

# Starte den Container mit dem offiziellen Entrypoint
# (ist in der Base-Image bereits definiert, nur zur Info)
# ENTRYPOINT ["docker-entrypoint.sh"]
# CMD ["postgres"]

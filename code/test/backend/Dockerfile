# Verwende ein Maven-Image, das sowohl Build- als auch Laufzeitumgebung bietet
FROM maven:3.8.7-eclipse-temurin-17

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere Maven-Projektdateien
COPY pom.xml .
COPY src ./src

# Kopiere das erstellte JAR-File ins Arbeitsverzeichnis
# Falls dein JAR beispielsweise `my-java-app-1.0-SNAPSHOT.jar` heißt, prüfe, ob der Name korrekt ist.
COPY target/trd-1.0-backend.jar app.jar

# Starte die Anwendung mit `java -jar`
CMD ["java", "-jar", "app.jar"]

## Java Programm im Docker Container auf dem Raspberry Pi ausführen

Diese Anleitung zeigt dir, wie du ein Java-Programm in einem Docker-Container auf einem Raspberry Pi betreibst!

---

### 1. Verzeichnisstruktur vorbereiten

```
/my-java-app
│
├── src
│   └── Main.java
├── Dockerfile
├── .dockerignore
├── pom.xml (oder build.gradle)
├── .gitlab-ci.yml (oder .github/workflows/ci.yml)
```

---

### 2. Dockerfile erstellen

```dockerfile
# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy pom.xml and download dependencies first (for caching)
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy the entire project into the container
COPY src ./src
COPY . .

# Build the Java application
RUN mvn clean package -DskipTests

# Expose the port your app runs on
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/my-java-app.jar"]
```

---

### 3. .dockerignore

```
target/
*.iml
*.log
.idea/
.git/
```

---

### 4. Docker-Image bauen

```bash
docker build -t my-java-app .
```

✅ **Container starten:**

```bash
docker run -d -p 8080:8080 my-java-app
```

---

### 5. GitLab CI/CD Beispiel

```yaml
stages:
  - build
  - deploy

build:
  stage: build
  image: maven:3.8.4-openjdk-17
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $CI_REGISTRY/my-java-app:latest .
    - docker push $CI_REGISTRY/my-java-app:latest

deploy:
  stage: deploy
  script:
    - ssh pi@$PI_HOST "docker pull $CI_REGISTRY/my-java-app:latest"
    - ssh pi@$PI_HOST "docker stop my-java-app || true"
    - ssh pi@$PI_HOST "docker rm my-java-app || true"
    - ssh pi@$PI_HOST "docker run -d -p 8080:8080 --name my-java-app $CI_REGISTRY/my-java-app:latest"
```

---

### 6. Docker auf dem Raspberry Pi installieren

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl enable docker
sudo systemctl start docker
```

✅ **Test:**

```bash
docker --version
```

---

### 7. Programm nach dem Booten starten

```bash
sudo nano /etc/systemd/system/java-docker.service
```

**Inhalt:**

```
[Unit]
Description=Java Docker App
After=network.target

[Service]
ExecStart=/usr/bin/docker run -d -p 8080:8080 --name my-java-app my-java-app:latest
Restart=always
ExecStop=/usr/bin/docker stop my-java-app
ExecStopPost=/usr/bin/docker rm my-java-app

[Install]
WantedBy=multi-user.target
```

✅ **Service aktivieren:**

```bash
sudo systemctl daemon-reload
sudo systemctl enable java-docker
sudo systemctl start java-docker
```

---

### 8. Fazit

- **Keine direkte SSH-Dateiübertragung mehr:** Dein CI/CD-System baut und pusht das Docker-Image.
- **Raspberry Pi zieht nur noch das Docker-Image:** Immer konsistent und sauber.
- **Container-basierter Ansatz:** Einfache Updates, Rollbacks und Wartung.

✨ Fertig! Dein Java-Programm läuft sauber isoliert in einem Docker-Container auf deinem Raspberry Pi! 🐳🔥

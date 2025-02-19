## Anleitung: Docker auf dem Raspberry Pi einrichten und eine Build-Pipeline aufbauen

Diese Anleitung hilft dir, Docker auf deinem Raspberry Pi zu installieren, eine Docker-Compose-Datei zu erstellen und eine CI/CD-Build-Pipeline einzurichten, um bei Code-Änderungen automatisch den neuesten Docker-Container zu starten.

---

### 1. Docker auf dem Raspberry Pi installieren

**System aktualisieren:**
```bash
sudo apt update
sudo apt upgrade
```

**Docker installieren:**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

**Docker ohne sudo verwenden:**
```bash
sudo usermod -aG docker $USER
```
*Anschließend ab- und wieder anmelden oder den Pi neu starten.*

**Docker-Version prüfen:**
```bash
docker --version
```

**Docker Compose installieren:**
```bash
sudo apt install python3-pip
sudo pip3 install docker-compose
```

**Docker- und Docker-Compose-Versionen prüfen:**
```bash
docker-compose --version
```

---

### 2. Projektstruktur

Erstelle eine Projektstruktur auf deinem Raspberry Pi:
```
/my-docker-project/
│
├── docker-compose.yml
├── Dockerfile
├── src/
│   └── Main.java
├── .git/
```

---

### 3. Dockerfile erstellen

Erstelle eine `Dockerfile` im Projektverzeichnis:

```
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY src/ /app/src/
COPY pom.xml /app/

RUN apt-get update \
    && apt-get install -y maven \
    && mvn -f /app/pom.xml clean package

CMD ["java", "-jar", "target/your-java-app.jar"]
```

---

### 4. Docker-Compose-Datei erstellen

Erstelle die `docker-compose.yml` im selben Verzeichnis:

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    volumes:
      - ./src:/app/src
    environment:
      - JAVA_OPTS=-Xmx512m
```

---

### 5. Git-Repository einrichten

Initialisiere ein Git-Repository im Projektordner:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

---

### 6. GitHub Actions CI/CD-Pipeline erstellen

Erstelle im GitHub-Repository einen neuen Ordner `.github/workflows/` und füge eine Datei `deploy.yml` hinzu:

```yaml
name: Deploy to Raspberry Pi

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up SSH
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
          PI_HOST: ${{ secrets.PI_HOST }}
          PI_USER: ${{ secrets.PI_USER }}
        run: |
          mkdir -p ~/.ssh
          echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan -H $PI_HOST >> ~/.ssh/known_hosts

      - name: Deploy to Raspberry Pi
        run: |
          ssh $PI_USER@$PI_HOST "cd /my-docker-project && git pull origin main && docker-compose up -d --build"
```

---

### 7. SSH-Schlüssel für GitHub hinterlegen

**SSH-Schlüssel auf dem Raspberry Pi generieren:**
```bash
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```

**Öffentlichen Schlüssel anzeigen:**
```bash
cat ~/.ssh/id_rsa.pub
```

**Diesen Schlüssel zu deinem GitHub-Repository hinzufügen:**
- Gehe zu deinem GitHub-Repo ➔ Settings ➔ Secrets and variables ➔ Actions ➔ New repository secret.
- Erstelle folgende Secrets:
  - `SSH_PRIVATE_KEY`: Inhalt von `~/.ssh/id_rsa` (privater Schlüssel).
  - `PI_HOST`: IP-Adresse des Raspberry Pi.
  - `PI_USER`: Benutzername (z. B. `pi`).

---

### 8. Docker-Container starten

Auf dem Raspberry Pi:
```bash
cd /my-docker-project
sudo docker-compose up -d --build
```

Dein Container läuft nun und wird bei jedem Push automatisch neu gebaut! 🚀

---

✨ **Zusammengefasst:**
- Docker auf dem Raspberry Pi installieren.
- Docker-Compose-Datei und Dockerfile erstellen.
- GitHub Actions oder Git Hooks nutzen, um den Container bei Änderungen automatisch neu zu bauen und zu starten.

Melde dich gern, wenn wir noch etwas optimieren oder erweitern wollen! 🔥


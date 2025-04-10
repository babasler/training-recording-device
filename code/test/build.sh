#!/bin/bash
# This script is used to build the project and run it
pwd

##stop container
docker compose down

#checkout repository
git pull

#build the project
cd ./frontend
pwd
npm install
npm run build

cd ..
cd ./backend
pwd
mvn clean package -DskipTests

#build the docker image and run the container
cd ..
pwd
docker compose up -d
docker ps 
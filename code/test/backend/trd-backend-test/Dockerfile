FROM openjdk:23
RUN mkdir /app

RUN mkdir /app/logs && chmod -R 777 /app/logs

COPY target/Broker.jar /app/Broker.jar

COPY src/log4j2.xml /app/log4j2.xml

WORKDIR /app

RUN apt-get update \
    && apt-get install -y maven \
    && mvn -f /app/pom.xml clean package

CMD ["java", "-jar", "target/Broker.jar"]

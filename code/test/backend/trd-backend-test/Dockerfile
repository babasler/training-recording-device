FROM openjdk:23
RUN mkdir /app

RUN mkdir /app/logs && chmod -R 777 /app/logs

COPY target/Broker.jar /app/Broker.jar

COPY src/log4j2.xml /app/log4j2.xml

WORKDIR /app

RUN mvn clean package -DskipTests

CMD ["java", "-jar", "target/Broker.jar"]

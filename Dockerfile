from vtlong86/maven-openjdk11:latest
COPY . /opt/app
WORKDIR /opt/app
EXPOSE 8083
RUN mvn clean install -Dmaven.test.skip=true
WORKDIR /opt/app/target
ADD entrypoint.sh /opt/app/target/
ENTRYPOINT ["/opt/app/target/entrypoint.sh"]

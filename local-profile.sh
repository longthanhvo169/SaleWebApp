#!/bin/bash
echo 'mvn clean package -Dmaven.test.skip=true'
mvn clean package -Dmaven.test.skip=true
echo 'Start Sale Web Application'
cd target
java -Dspring.profiles.active=local -jar SaleWebApp-0.0.1-SNAPSHOT.jar
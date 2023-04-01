#!/bin/bash
java -XX:MinRAMPercentage=${MIN_MEMORY_PERCENT} -XX:MaxRAMPercentage=${MAX_MEMORY_PERCENT} -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=logs/ -Dfile.encoding=UTF8 -Duser.timezone=Asia/Ho_Chi_Minh -Dspring.profiles.active=$ENV -Dserver.port=8083 -jar SaleWebApp-0.0.1-SNAPSHOT.jar

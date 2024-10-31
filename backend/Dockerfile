# 使用 Maven 镜像进行构建
FROM maven:3.8.5-openjdk-17-slim AS build

# 设置工作目录
WORKDIR /app

# 复制 pom.xml 并下载依赖
COPY pom.xml .
RUN mvn dependency:go-offline

# 复制项目源代码并进行构建
COPY . .
RUN mvn clean package -DskipTests

# 使用 OpenJDK 镜像来运行应用
FROM openjdk:17-jdk-slim

# 设置工作目录
WORKDIR /app

# 复制构建好的 JAR 文件
COPY --from=build /app/target/*.jar app.jar

# 暴露 Spring Boot 运行的端口
EXPOSE 8080

# 启动应用
ENTRYPOINT ["java", "-jar", "app.jar"]
# Step 1: Build the application using Gradle
FROM eclipse-temurin:21-jdk-alpine AS build
WORKDIR /app

# Copy the gradle wrapper and project files
COPY gradlew .
COPY gradle gradle
COPY build.gradle.kts .
COPY settings.gradle.kts .
COPY src src

# Make the wrapper executable and build the jar
RUN chmod +x ./gradlew
RUN ./gradlew clean bootJar -x test

# Step 2: Run the application
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Copy only the built jar from the build stage
COPY --from=build /app/build/libs/*.jar app.jar

# Expose the port (Render uses the PORT env var)
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
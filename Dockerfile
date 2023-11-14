# Stage 1: Build the Angular app
FROM node:17 as builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the Angular app using Nginx
FROM nginx:latest

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the built Angular app from the builder stage to the Nginx web server
COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/

# Expose the default Nginx port
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]

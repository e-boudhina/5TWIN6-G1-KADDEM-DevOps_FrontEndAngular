# Stage 1 - Build the app
FROM node:14 AS builder

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --prod

# Stage 2 - Create a lightweight image with just the built app
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

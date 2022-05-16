# STAGE 1:
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# STAGE 2:
FROM nginx:latest
COPY --from=node /app/dist/rule-of-thumb /usr/share/nginx/html
# Expose Port 80
EXPOSE 80
# Stage 1 - the build process
FROM nginx:latest

COPY assets /usr/share/nginx/html/assets
COPY index.html /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
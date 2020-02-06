# Stage 1 - the build process
FROM nginx:arm64v8

COPY assets /usr/share/nginx/html/assets
COPY index.html /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
# Stage 1 - the build process
FROM arm64v8/nginx

COPY assets /usr/share/nginx/html/assets
COPY index.html /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
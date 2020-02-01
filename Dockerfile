# Stage 1 - the build process
FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

COPY assets /usr/share/nginx/html/assets
COPY index.html /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
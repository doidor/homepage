# Stage 1 - the build process
FROM nginx:latest

COPY ./env.sh /

COPY assets /usr/share/nginx/html/assets
COPY index.html /usr/share/nginx/html

RUN /env.sh > /usr/share/nginx/html/assets/js/env.js
RUN cat /usr/share/nginx/html/assets/js/env.js

CMD ["nginx", "-g", "daemon off;"]
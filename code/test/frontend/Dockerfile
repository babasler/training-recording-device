# Stufe 2: Nginx als Webserver
FROM nginx:alpine

COPY dist/frontend/browser/. /usr/share/nginx/html/
#COPY --from=build app/dist/frontend/browser/index.html /usr/share/nginx/html/index.html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

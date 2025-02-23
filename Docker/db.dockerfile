FROM mysql:8

COPY /sql/init.sql /docker-entrypoint-initdb.d/

ENV MYSQL_DATABASE=library
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_USER=manager
ENV MYSQL_PASSWORD=manager

EXPOSE 3306

# Dockerfile

FROM node:12.22-alpine3.12
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY . /opt/app/
RUN echo nameserver 8.8.8.8 > /etc/resolv.conf && npm install
RUN adduser --disabled-password app
RUN chown -R app:app /opt/app
EXPOSE 3000
USER app
CMD [ "npm", "start" ]

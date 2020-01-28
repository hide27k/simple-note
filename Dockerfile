FROM node:10.16.3-alpine

WORKDIR /app

RUN npm update \
    && npm uninstall yarn -g \
    && npm install -g yarn

CMD ["/bin/sh"]
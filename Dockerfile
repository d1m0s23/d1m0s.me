FROM node:17

WORKDIR /home/node/d1m0s-website

COPY package*.json ./

USER node

RUN npm install
RUN npm install -g serve

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "serve", "-s build", "-l 3000" ]

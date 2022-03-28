FROM node:17
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g serve
RUN serve -s build

COPY . .

EXPOSE 3000
CMD [ "serve", "-l 3000" ]
FROM node:16.19.1-alpine3.17

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT npm run dev
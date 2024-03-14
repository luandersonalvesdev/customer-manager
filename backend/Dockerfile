FROM node:16.19.1-alpine3.17

WORKDIR /backend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3001

ENTRYPOINT npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && npm run dev
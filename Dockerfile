FROM node:23.4.0

COPY . .

WORKDIR /api

RUN rm -rf node_modules

RUN npm i 

RUN chown -R root:root ./

ENV NODE_ENV=testing

ENV MONGO_URI_TEST=mongodb://mongo-gestor-tarefas:27017/gestor-tarefas

CMD npx tsx watch --tsconfig tsconfig.json src/index.ts

EXPOSE 5002
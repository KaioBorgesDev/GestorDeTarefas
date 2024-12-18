FROM node:16.20.2-alpine
 

WORKDIR /api

COPY . .

USER root

RUN rm -rf node_modules

RUN  npm i 

ENV NODE_ENV=testing

ENV MONGO_URI_TEST=mongodb://mongo-gestor-tarefas:27017/gestor-tarefas

CMD npx tsx watch --tsconfig tsconfig.json src/index.ts

#CMD ["npm", "run", "mdev"]

EXPOSE 5002
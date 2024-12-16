FROM node:16.20.2-alpine
 

WORKDIR /api

COPY . .


RUN rm -rf node_modules

RUN  npm i 

CMD npx tsx watch --tsconfig tsconfig.json src/index.ts

#CMD ["npm", "run", "mdev"]

EXPOSE 5002
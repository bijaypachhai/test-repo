FROM node:22-alpine3.19

WORKDIR app/

COPY . .

RUN npm i

EXPOSE 3000

ENTRYPOINT ["node index.js"]

FROM node:14

#RUN apk update

WORKDIR /app

COPY package*.json ./
#COPY tsconfig.json ./

#COPY src /app/src
RUN npm install

COPY . .

RUN npm run build
#COPY .env ./dist/
WORKDIR ./dist

EXPOSE 5000

CMD ["node", "src/app.js"]
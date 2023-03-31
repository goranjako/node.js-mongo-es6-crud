FROM node:10

WORKDIR /src/app

COPY package.json ./
COPY .babelrc ./
RUN npm install
COPY . .

RUN npm run build


EXPOSE 4000

CMD npm start

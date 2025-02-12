FROM node:20
WORKDIR /user/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm","run","preview" ]
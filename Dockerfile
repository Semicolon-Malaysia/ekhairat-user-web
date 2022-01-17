FROM node:12

WORKDIR /src/app

COPY package*.json ./
RUN npm install

COPY . .

# RUN mv .env.production .env
RUN npm run build

RUN npm cache clean --force

EXPOSE 8080:8080
CMD [ "npm", "start" ]
FROM node:10.11

COPY . /app
WORKDIR /app

RUN npm install -g pm2
RUN npm install

EXPOSE 3000
CMD ["pm2-docker", "start", "process.yml"]

FROM node:16.14.2-alpine

WORKDIR /app

COPY app/package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]


# リモートコンテナ接続
# 左下を押下
# F1を押下し、Dev Containers: Open Folder in Container..を選択
# From 'docker-compose.yml'を選択
# リモート接続を解除するときは左下を押下し、close remote containerを選択。
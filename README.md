# How to start with Dev Containers
1. イメージビルド
  docker-compose build

2. パッケージインストール(初回または、新たにパッケージが導入された時のみ)
  docker compose run --rm front yarn install --frozen-lockfile

3. コンテナ起動
  docker-compose up -d

# Reference
https://zenn.dev/temple_c_tech/articles/setup-next-on-docker
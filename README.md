# How to start with Dev Containers
1. Image-building

  docker-compose build

2. Package installation (only the first time or when a new package is installed)

   docker compose run --rm front yarn install --frozen-lockfile

3. Container Start

    docker-compose up -d

# Reference
https://zenn.dev/temple_c_tech/articles/setup-next-on-docker
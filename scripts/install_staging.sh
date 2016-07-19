#!/usr/bin/env bash

docker-compose -f staging.yml build --pull staging_web
docker-compose -f staging.yml up --no-deps -d staging_web
echo -e "\e[91mCleaning old docker containers\e[0m"
docker rmi $(docker images -f "dangling=true" -q)
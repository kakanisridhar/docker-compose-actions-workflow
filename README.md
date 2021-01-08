docker-compose build

docker-compose up --force-recreate
npm install
npm run test:local
docker-compose down

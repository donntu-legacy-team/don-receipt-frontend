# ДонРецепты.ру

## Как запустить

Поднимаем [бэк](https://github.com/donntu-legacy-team/don-receipt-backend) через docker-compose
```
$ git clone git@github.com:donntu-legacy-team/don-receipt-backend.git
$ cd don-receipt-backend
$ git checkout develop
$ docker-compose up --build
$ npm run seed
```

Поднимаем дев фронта
```
$ npm i
$ npm run dev
```

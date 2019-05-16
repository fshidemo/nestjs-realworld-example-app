# ![Node/Express/Mongoose Example App](project-logo.png)

[![Build Status](https://travis-ci.org/anishkny/node-express-realworld-example-app.svg?branch=master)](https://travis-ci.org/anishkny/node-express-realworld-example-app)

> ### NestJS (Express + Mongoose) codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld-example-apps) API spec.


----------

# Getting started

## Installation

Clone the repository

    git clone git@github.com:lujakob/nestjs-realworld-example-app.git

Switch to the repo folder

    cd nestjs-realworld-example-app
    
Install dependencies
    
    npm install

Copy config file and set JsonWebToken secret key

    cp src/config.ts.example src/config.ts
    
----------

## Database

The example codebase uses [Typeorm](http://typeorm.io/) with a mySQL database.

Create a new mysql database with the name `nestjsrealworld` (or the name you specified in the ormconfig.json)

Copy Typeorm config example file for database settings

    cp ormconfig.json.example ``
    
Set mysql database settings in ormconfig.json

    {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "your-mysql-username",
      "password": "your-mysql-password",
      "database": "nestjsrealworld",
      "entities": ["src/**/**.entity{.ts,.js}"],
      "synchronize": true
    }
    
Start local mysql server and create new database 'nestjsrealworld'

On application start, tables for all entities will be created.

----------

## NPM scripts

- `npm start` - Start application
- `npm run start:watch` - Start application in watch mode
- `npm run test` - run Jest test runner 
- `npm run start:prod` - Build application

----------

## API Specification

This application adheres to the api specifications set by the [Thinkster](https://github.com/gothinkster) team. This helps mix and match any backend with any other frontend without conflicts.

> [Full API Spec](https://github.com/gothinkster/realworld/tree/master/api)

More information regarding the project can be found here https://github.com/gothinkster/realworld

----------

## Start application

- `npm start`
- Test api with `http://localhost:3000/api/articles` in your favourite browser

----------

# Authentication
 
This applications uses JSON Web Token (JWT) to handle authentication. The token is passed with each request using the `Authorization` header with `Token` scheme. The JWT authentication middleware handles the validation and authentication of the token. Please check the following sources to learn more about JWT.

----------
 
# Swagger API docs

This example repo uses the NestJS swagger module for API documentation. [NestJS Swagger](https://github.com/nestjs/swagger) - [www.swagger.io](https://swagger.io/)        



### Development

```bash
$ sls offline
```

```
$ sls offline
Serverless: Starting Offline: dev/us-east-1.

Serverless: Routes for index:
Serverless: ANY /
Serverless: ANY /{proxy*}

Serverless: Offline listening on http://localhost:3000
```

Then browse http://localhost:3000

The logs should be :

```
Serverless: ANY / (λ: index)
[Nest] 5280   - 2019-03-24 14:44   [NestFactory] Starting Nest application...
[Nest] 5280   - 2019-03-24 14:44   [InstanceLoader] AppModule dependencies initialized +11ms
[Nest] 5280   - 2019-03-24 14:44   [RoutesResolver] AppController {/}: +5ms
[Nest] 5280   - 2019-03-24 14:44   [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 5280   - 2019-03-24 14:44   [NestApplication] Nest application successfully started +1ms
```


## How to Deploy
```bash
$ npm run prestart:prod && sls deploy
```

## Options
### Hot start
See : https://serverless.com/blog/keep-your-lambdas-warm/

These behavior can be fixed with the plugin serverless-plugin-warmup

1 Install the plugin

```
$ npm install serverless-plugin-warmup --save-dev
```

2 Enable the plugin

```
plugins:
  - '@hewmen/serverless-plugin-typescript'
  - serverless-plugin-optimize
  - serverless-offline
  - serverless-plugin-warmup

custom:
  # Enable warmup on all functions (only for production and staging)
  warmup:      
      - production
      - staging
```

### Use Swagger for development

```
npm run swagger
$ ts-node src/swagger.ts
```

```
[Nest] 6890   - 2019-03-24 15:11   [NestFactory] Starting Nest application...
[Nest] 6890   - 2019-03-24 15:11   [InstanceLoader] AppModule dependencies initialized +11ms
[Nest] 6890   - 2019-03-24 15:11   [RoutesResolver] AppController {/}: +224ms
[Nest] 6890   - 2019-03-24 15:11   [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 6890   - 2019-03-24 15:11   [NestApplication] Nest application successfully started +2ms
```

Then browse http://localhost:3001/api

**This function is for development.** If you want to use production, change package.json dependencies and serverless.yml.

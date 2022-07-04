
# Backend server in NestJS serving REST API using MVC architecture


The developed API provides full CRUD and JWT authentication for a system that helps to plan paper RPG games.

The system works with the MongoDB base using the Mongoose implementation available as a NestJS module

Each module of the system has been mirrored as a NestJS module, containing controller, service, schema and DTO.



## Run Locally

Clone the project

```bash
  git clone https://github.com/Opyd/nestjs_rpg_api
```

Go to the project directory

```bash
  cd nestjs_rpg_api
```

Install dependencies

```bash
  npm install
```
Insert your mongodb uri in /nestjs_rpg_api/src/app.module.ts

```bash
  MongooseModule.forRoot(YOUR_URI)
```

Start the server

```bash
  npm run start:dev
```


## API Reference

#### Register

Allows

```http
  POST /auth/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Must be unique |
| `email` | `string` | **Required**. Must be unique |
| `password` | `string` | **Required**. Must be unique |

#### Users data

Returns authenticated user information.

```http
  GET /users/me
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Contains JWT Token |

#### Other Examples

Get item by ID

```http
  GET /items/{id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization`      | `string` | **Required**. Contains JWT Token |
| `id`      | `string` | ID of item |


## Authors

- [@Opyd](https://www.github.com/Opyd)
- [@Szymekkkk](https://www.github.com/Szymekkkk)



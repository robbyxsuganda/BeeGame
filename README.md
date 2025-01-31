# BeeGame API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /google-login`
- `GET /pub`
- `GET /pub/:id`
- `GET /pub/games/:CategoryId`
- `GET /vouchers`
- `GET /ai`
- `GET /payment`
- `GET /payment/midtrans`
- `PATCH /payment/status`
- `GET /profile`
- `PATCH /change-profile/:id`
- `POST /games`
- `GET /games`
- `GET /games/:id`
- `PUT /games/:id`
- `DELETE /games/:id`
- `PATCH /games/:id`
- `GET /categories`

&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "message": "User registered successfully",
  "user": {
    "id": "integer",
    "username": "string",
    "email": "string"
  }
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

&nbsp;

## 3. GET /pub

Description:

- Retrieve a list of available games.

_Response (200 - OK)_

```json
{
  "message": "Success Read Games",
  "games": [
    {
      "id": "integer",
      "title": "string",
      "developer": "string",
      "image": "string",
      "CategoryId": "integer"
    }
  ]
}
```

&nbsp;

## 4. GET /pub/:id

Description:

- Retrieve a specific game by ID.

Request:

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success Read Game",
  "game": {
    "id": "integer",
    "title": "string",
    "developer": "string",
    "image": "string",
    "CategoryId": "integer"
  }
}
```

&nbsp;

## 5. POST /games

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- body:

```json
{
  "title": "string",
  "developer": "string",
  "image": "string",
  "CategoryId": "integer"
}
```

_Response (201 - Created)_

```json
{
  "message": "Success Create Game",
  "game": {
    "id": "integer",
    "title": "string",
    "developer": "string",
    "image": "string",
    "CategoryId": "integer"
  }
}
```

&nbsp;

## 6. PUT /games/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

- body:

```json
{
  "title": "string",
  "developer": "string",
  "image": "string",
  "CategoryId": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success Update Game",
  "game": {
    "id": "integer",
    "title": "string",
    "developer": "string",
    "image": "string",
    "CategoryId": "integer"
  }
}
```

&nbsp;

## 7. DELETE /games/:id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

- params:

```json
{
  "id": "integer"
}
```

_Response (200 - OK)_

```json
{
  "message": "Success Delete Game"
}
```

&nbsp;

## 8. GET /categories

Description:

- Retrieve all categories.

_Response (200 - OK)_

```json
{
  "message": "Success Read Categories",
  "categories": [
    {
      "id": "integer",
      "name": "string"
    }
  ]
}
```

&nbsp;

## Global Error

_Response (401 - Unauthorized)_

```json
{
  "message": "Please login first"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You don't have any access"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found!"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```

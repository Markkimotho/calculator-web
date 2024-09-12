# API Documentation

## 1. Register User

**Endpoint:** `POST /api/auth/register`

**Description:** Registers a new user by providing the necessary details. It creates a user and associated user information in the database.

### Request

- **URL:** `http://localhost:4000/api/auth/register`
- **Method:** `POST`
- **Headers:**
    - `Content-Type: application/json`
- **Body:**

    ```json
    {
      "username": "string",
      "email": "string",
      "password": "string",
      "first_name": "string",
      "last_name": "string"
    }
    ```

### Parameters

- `username` (string, required): The unique username for the user.
- `email` (string, required): The email address of the user.
- `password` (string, required): The password for the user account.
- `first_name` (string, required): The first name of the user.
- `last_name` (string, required): The last name of the user.

### Responses

- **201 Created** - Successfully registered user.

    ```json
    {
      "success": true,
      "token": "string"
    }
    ```

- **400 Bad Request** - Missing required fields or validation errors.

    ```json
    {
      "success": false,
      "message": "Missing required fields: username, email, password, first_name, and last_name"
    }
    ```

- **400 Bad Request** - Email is already registered.

    ```json
    {
      "success": false,
      "error": "Email is already registered"
    }
    ```

- **400 Bad Request** - Username is already taken.

    ```json
    {
      "success": false,
      "error": "Username is already taken"
    }
    ```

- **500 Internal Server Error** - Error creating user.

    ```json
    {
      "success": false,
      "message": "Error creating user"
    }
    ```

---

## 2. Login User

**Endpoint:** `POST /api/auth/login`

**Description:** Logs in a user by verifying the provided email and password. Returns a JWT token if the credentials are correct.

### Request

- **URL:** `http://localhost:4000/api/auth/login`
- **Method:** `POST`
- **Headers:**
    - `Content-Type: application/json`
- **Body:**

    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```

### Parameters

- `email` (string, required): The email address of the user.
- `password` (string, required): The password for the user account.

### Responses

- **200 OK** - Successfully logged in and returned JWT token.

    ```json
    {
      "success": true,
      "token": "string"
    }
    ```

- **400 Bad Request** - Missing email or password.

    ```json
    {
      "success": false,
      "message": "Please provide a valid email and password"
    }
    ```

- **401 Unauthorized** - Invalid credentials or user not found.

    ```json
    {
      "success": false,
      "message": "Invalid credentials"
    }
    ```

- **500 Internal Server Error** - Error logging in.

    ```json
    {
      "success": false,
      "message": "Error logging in"
    }
    ```

---

## 3. Logout User

**Endpoint:** `POST /api/auth/logout`

**Description:** Logs out the user by clearing the JWT token on the client side.

### Request

- **URL:** `http://localhost:4000/api/auth/logout`
- **Method:** `POST`
- **Headers:**
    - `Authorization: Bearer <token>`

### Responses

- **200 OK** - Successfully logged out.

    ```json
    {
      "success": true,
      "message": "Logged out successfully"
    }
    ```

---

## API Details

### 1. Register User

**Description:** Registers a new user by providing the necessary details such as username, email, password, first name, and last name. The system will create a new user and associate additional user information.

**Example Request:**

```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123",
  "first_name": "John",
  "last_name": "Doe"
}

```

**Success Response:**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzEyMzQ1IiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjE3MTIzNDU2LCJleHBpcmF0aW9uIjoxNjE3MTI4NzIifQ.SZmT5WcQ4o7nP_Rs9x9RzS-k7pMQsKx3tmEz1z5PmqA"
}
```

**Error Response:**

```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

### 3. Logout User
**Description:** Logs out the user. This endpoint requires a Bearer token for authorization.

**Example Request:**

```http
POST /api/auth/logout
Authorization: Bearer <token>
```

**Success Response:**

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```
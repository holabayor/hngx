# HNGx Stage Two

This repository contains the code for the Stage Two task of the HNG Backend Internship.

## Description

This project is created to fulfill the requirements for HNGx Stage Two backend task. <br/>It is built using Node.js and utilizes MongoDB as a NoSQL database. The project also utilizes the MongooseJS library, which is an Object Data Modelling (ODM) library for MongoDB.<br/> Additionally, the project uses the Express.js framework for building web applications in Node.js.

It is hosted on Render and can be accessed via this link: https://hng-stagetwo.onrender.com/api

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/holabayor/hngx.git
   ```

2. Navigate to the `stage_two` directory:

   ```
   cd hngx/stage_two
   ```

3. Install project dependencies:

   ```
   npm install
   ```

4. Set up the environment variables:

   - Create a `.env` file in the root directory of the project.
   - Add the following variables to the `.env` file:

   ```
   MONOGO_URI=<your_mongodb_uri>
   ```

5. Start the server:

   ```
   npm start
   ```

The server will start running on `http://localhost:3000`.

## API Endpoints

The following endpoints are available:

- GET /api: Retrieves all persons from the database.
- GET /api/:id: Retrieves a person by their ID.
- POST /api: Creates a new person.
- PUT /api/:id: Updates a person by their ID.
- DELETE /api/:id: Deletes a person by their ID.

Please note that the API supports both JSON request bodies and query parameters, depending on the endpoint.

## Usage

To interact with the API, you can use tools like Postman or cURL. Here are some example requests:

- GET all persons:

```

GET http://localhost:3000/api

```

Response

```
[
    {
        "_id": "650041f2cf55dc9a1eee4406",
        "name": "Updated Name"
    },
    {
        "_id": "65004250cf55dc9a1eee4410",
        "name": "John Doe"
    },
    {
        "_id": "650044f3b3939e2a96ba6308",
        "name": "Scott Jones"
    }
]
```

- GET a person by ID:

```

GET http://localhost:3000/api/:id

```

Response:

    {
        "_id": "65004250cf55dc9a1eee4410",
        "name": "John Doe",
    }

- POST a new person:

```
POST http://localhost:3000/api
```

Response:

    {
        "_id": "64ff1b27624afe2bcd44459d",
        "name": "John Doe",
    }

- PUT a person by ID:

```
PUT http://localhost:3000/api/:id
```

Response:

    {
        "_id": "64ff1b27624afe2bcd44459d",
        "name": "John Doe",
    }

- DELETE a person by ID:

```
DELETE http://localhost:3000/api/:id
```

Response:

    {}

## UML Diagram

![UML Diagram](https://github.com/holabayor/hngx/blob/main/stage_two/diagrams/person%20UML.png)

## Testing

To run the tests, run the following command:

```
npm test
```

## Author

- [Aanuoluwapo Liasu](https://github.com/holabayor)

## License

This project is open source and available under the [MIT License](LICENSE).

```

```

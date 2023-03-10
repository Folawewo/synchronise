# Synchronise

User management system built using MongoDB and Express. The system allows users to sign up, log in, and manage their profiles through a RESTful API.

## Features

* User registration: new users can sign up by providing their name, email, and password.
* User authentication: registered users can log in by providing their email and password. Authentication is implemented using JSON Web Tokens (JWT).
* User profile management: authenticated users can update their profile information, including their name and password.

## Prerequisites

To use this project, you should have the following software installed on your machine:

* [**Node.js**](https://nodejs.org/) (v10 or later)
* [**npm**](https://www.npmjs.com/)

You will also need to have a MongoDB instance running to store user information.

## Getting started

To get started, follow these steps:

1. Clone the repository to your local machine:
```sh
git clone https://github.com/Folawewo/synchronise.git
cd synchronise
```

2. Install the dependencies:
```sh
npm install
```

3. Set the environment variables:
Create a file named **`.env`** in the root directory of the project with the following content:
```makefile
PORT=5000
MONGO_URL=mongodb://localhost:27017/synchronise
JWT_SECRET=mysecretkey
```

* **`PORT:`** the port number on which the API should listen.
* **`MONGO_URL:`** the URI of the MongoDB instance.
* **`JWT_SECRET:`** a secret key used to sign and verify JWTs.
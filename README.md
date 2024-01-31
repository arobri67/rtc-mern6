# MERN6 Express Server API

This repository contains the backend API for managing mice and cages in a laboratory environment. The API is built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on mice and cages. This is a project from the RocktheCode bootcamp

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

To run this project, you need to have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

```bash
git clone https://github.com/your-username/mern6-express-server.git
cd mern6-express-server
npm install
npm i nodemon
npm start
```

## Usage

### API Endpoints

#### **Mice Endpoints**

- **Get all mice:**

  - **URL:** `/mice`
  - **Method:** `GET`

- **Get a mouse by ID:**

  - **URL:** `/mice/:id`
  - **Method:** `GET`

- **Create a new mouse:**

  - **URL:** `/mice`
  - **Method:** `POST`

- **Update a mouse:**

  - **URL:** `/mice/:id`
  - **Method:** `PUT`

- **Delete a mouse:**

  - **URL:** `/mice/:id`
  - **Method:** `DELETE`

- **Get the cage of a mouse:**

  - **URL:** `/mice/:id/cage`
  - **Method:** `GET`

- **Update or delete the cage from a mouse:**
  - **URL:** `/mice/:id/cage`
  - **Method:** `PUT`
  - **Body Parameters:**
    - `action`: "add" or "delete"
    - `cageId`: ID of the cage

#### **Cages Endpoints**

- **Get all cages:**

  - **URL:** `/cages`
  - **Method:** `GET`

- **Get a cage by ID:**

  - **URL:** `/cages/:id`
  - **Method:** `GET`

- **Get all mice in a cage:**

  - **URL:** `/cages/:id/mice`
  - **Method:** `GET`

- **Create a new cage:**

  - **URL:** `/cages`
  - **Method:** `POST`

- **Update a cage:**

  - **URL:** `/cages/:id`
  - **Method:** `PUT`

- **Delete a cage:**
  - **URL:** `/cages/:id`
  - **Method:** `DELETE`

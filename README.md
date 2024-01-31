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

  - **URL:** `/mice/<mouse-id>`
  - **Method:** `GET`

- **Create a new mouse:**

  - **URL:** `/mice`
  - **Method:** `POST`
  - **Body Parameters:**
    (minmum one key)
    - `identifier`: mouse number identifier
    - `earPunch`: ear punch identifier
    - `strain`: strain name,
    - `sex`: M or F,
    - `dateOfBirth`: date,
    - `genotype`: genotype name,
    - `fatherId`: father number identifier,
    - `motherId`: mother number identifier

- **Update a mouse:**

  - **URL:** `/mice/<mouse-id>`
  - **Method:** `PUT`
  - **Body Parameters:**
    (minmum one key)
    - `identifier`: "mouse number identifier",
    - `earPunch`: "ear punch identifier",
    - `strain`: "strain name",
    - `sex`: "M or F",
    - `dateOfBirth`: "date",
    - `genotype`: "genotype name",
    - `fatherId`: father number identifier,
    - `motherId`: mother number identifier

- **Delete a mouse:**

  - **URL:** `/mice/<mouse-id>`
  - **Method:** `DELETE`

- **Get the cage of a mouse:**

  - **URL:** `/mice/cage/<mouse-id>`
  - **Method:** `GET`

- **Update or delete the cage from a mouse:**
  It is will add or delete the cage_id field of the mouse. At the same time it will update the mice field of the corresponding cage.
  - **URL:** `/mice//update-mouse-cage/<mouse-id>`
  - **Method:** `PUT`
  - **Body Parameters:**
    - `action`: "add" or "delete"
    - `cageId`: "ID of the cage to add or delete"

#### **Cages Endpoints**

- **Get all cages:**

  - **URL:** `/cages`
  - **Method:** `GET`

- **Get a cage by ID:**

  - **URL:** `/cages/<cage-id>`
  - **Method:** `GET`

- **Get all mice in a cage:**

  - **URL:** `/cages/mice-list/<cage-id>`
  - **Method:** `GET`

- **Create a new cage:**

  - **URL:** `/cages`
  - **Method:** `POST`
  - **Body Parameters:**
    (minmum one key)
    `name:` "cage name",
    `location:` "cage location",
    `rack:` "cage rack",
    `type:` "type of cage",
    `diet:` "diet in the cage",
    `enrichement:` "type of enrichement",

- **Update a cage:**

  - **URL:** `/cages/<cage-id>`
  - **Method:** `PUT`
    (minmum one key)
    `name:` "cage name",
    `location:` "cage location",
    `rack:` "cage rack",
    `type:` "type of cage",
    `diet:` "diet in the cage",
    `enrichement:` "type of enrichement",

- **URL:** `/cages/add-mouse-to-cage/<cage-id>`
  It is will add mouse id into the mice of a given cage and update the cage_id of this mouse. If the mouse is already present in the cage, it will be removed and the cage_id of this mouse will be set to null

  - **Method:** `PUT`
    (minmum one key)
    `name:` "cage name",
    `location:` "cage location",
    `rack:` "cage rack",
    `type:` "type of cage",
    `diet:` "diet in the cage",
    `enrichement:` "type of enrichement",

- **Delete a cage:**
  - **URL:** `/cages/<cage-id>`
  - **Method:** `DELETE`

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please contact me.


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/Kielx/fullstackopen-part3">
    <img src="https://simpleicons.org/icons/node-dot-js.svg" alt="Logo" width="80" height="80">
    <img src="build/logo192.png" alt="Logo" width="80" height="80">      
  </a>

  <h3 align="center"> Fullstackopen Part3 - Phonebook </h3>

  <p align="center">
    Express phonebook REST API with React frontend
    <br />
    <br />
    <a href="https://fullstackopen-phonebook-api.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/Kielx/fullstackopen-part3/issues">Report Bug</a>
    ·
    <a href="https://github.com/Kielx/fullstackopen-part3/issues">Request Feature</a>
  <br />
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/y/kielx/fullstackopen-part3">
  <img alt="Travis (.org)" src="https://img.shields.io/travis/kielx/fullstackopen-part3">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/kielx/fullstackopen-part3">
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)




<!-- ABOUT THE PROJECT -->

## About The Project

The project is a part 3 of [Fullstackopen course](https://fullstackopen.com/en/) held by [The University of Helsinki](https://www.helsinki.fi/fi) which  is the oldest and largest science university in Finland, with an international scientific community of 40,000 people.

Part3 summarizes work from previous parts with a Phonebook project. It's a RESTful API for phonebook, with build scripts that allow to integrate React frontend from Part2 of the course. RESTful API can be acessed separateley from frontend.

### Built With
* [Node](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [React](https://reactjs.org/)

  <br />
<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.
  <br />
### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```
* Set up your MongoDB for example on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)


### Installation

1. Clone the repo
```sh
git clone git@github.com:Kielx/fullstackopen-part3.git
```
2. Install NPM packages
```sh
npm install
```
3. Enter your MongoDB URI's and set up your Node_env in `.env`
```JS
MONGODB_URI = 'mongodb+srv://<username>:<password>@devcluster.qd5ke.mongodb.net/<name>?retryWrites=true&w=majority'
MONGODB_URI_DEV = 'mongodb+srv://<username>:<password>@devcluster.qd5ke.mongodb.net/<name>?retryWrites=true&w=majority'
NODE_ENV ='development'
```
4. If you would like to use Frontend from part2 of the course with build scripts then clone my FullstackOpen repo 

* Clone the repo
```sh
git clone git@github.com:Kielx/FullstackOpen.git
```
* Set up build scripts in `package.json` by changing following lines according to your directory structure

```JS
    "build:ui": "rm -rf build && cd ../fullstackopen/part2/phonebook && npm run build --prod && cp -r build ../../../fullstackopen-part3/",
    "deploy": "git push heroku master",
    "deploy:full": "npm run build:ui && git add . && git commit -m uibuild && npm run deploy",
    "logs:prod": "heroku logs --tail"
```

And use command build:ui or deploy:full with heroku remote set up.

<br/>

## Usage

To start app in development mode cd into your cloned folder and use `npm run dev` command.
Server will start and log to the console port on which it is running. 

```JS
  npm run dev
  >Server listening at http://localhost:3001
  >Connected to mongoDB
```
    
Then you can issue common HTTP like GET POST DELETE PATCH with your favorite client like [POSTMAN](https://www.postman.com/) or perhaps [VSCode Rest Client](https://github.com/Huachao/vscode-restclient) or simply by using [Curl](https://curl.haxx.se/) like so: 

Get list of persons:
```sh
curl localhost:3001/api/persons
```

Post a single person:
```sh
curl --header "Content-Type: application/json" 
  --request POST 
  --data '{"name":"Kamil123","phone":"123 345 645"}' 
  http://localhost:3001/api/persons
```

Server should respond with corresponding \_id of a person and data 
```sh
{"_id":"5f76d2980210e61510c9004b","name":"Kamil123","phone":"123 345 645"}% 
```

If an error occurs, a detailed error message should be returned:

```sh
{"errorMessage":"Username already exists","errorData":[{"_id":"5f76d2980210e61510c9004b","name":"Kamil123","phone":"123 345 645","__v":0}]}% 
```

### Tests

* To run tests use:
```sh
npm run test
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/Kielx/fullstackopen-part3/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE](https://github.com/Kielx/fullstackopen-part3/blob/master/LICENSE.txt) for more information.

<!-- CONTACT -->
## Contact

Kielx.dev@gmail.com

Project Link: [https://github.com/Kielx/fullstackopen-part3](https://github.com/Kielx/fullstackopen-part3)









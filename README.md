
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="build/logo192.png" alt="Logo" width="80" height="80">
    <img src="https://simpleicons.org/icons/node-dot-js.svg" alt="Logo" width="80" height="80">
    
  </a>

  <h3 align="center"> Fullstackopen Part3 - Phonebook </h3>

  <p align="center">
    Express phonebook with react frontend
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
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)




<!-- ABOUT THE PROJECT -->

## About The Project

The project is a part 3 of [Fullstackopen course](https://fullstackopen.com/en/) held by [The University of Helsinki](https://www.helsinki.fi/fi) which  is the oldest and largest science university in Finland, with an international scientific community of 40,000 people.

Part3 summarizes work from previous parts with a Phonebook project. It's a react frontend with express server as backend. Main usage consists of creating a list of people with their phone numbers which can be further modified. RESTful API can be acessed separateley from frontend.

### Built With
* [React](https://reactjs.org/)
* [Node](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)

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
4. If you would like to change frontend or use it with build scripts then clone my FullstackOpen repo 

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

https://github.com/Kielx/fullstackopen-part3
<!-- CONTACT -->
## Contact

Kielx.dev@gmail.com

Project Link: [https://github.com/Kielx/fullstackopen-part3](https://github.com/Kielx/fullstackopen-part3)









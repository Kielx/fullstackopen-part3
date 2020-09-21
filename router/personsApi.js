const express = require("express");
const router = express.Router();

const validators = require("../validators");
const { validationResult } = require("express-validator");
const users = require("../persons.json");

router
  .route("/")
  .get((req, res) => {
    res.json(users);
  })
  .post([validators.checkUsername], (req, res) => {
    console.log(req.body);
    console.log(validationResult(req));
    res.status("200").send(req.body);
  });

router
  .route("/:id")
  .get((req, res) => {
    let foundUser = users.find((user) => user.id === req.params.id);
    if (!foundUser) {
      res.status("404").send("User not found");
    } else res.json(foundUser);
  })
  .delete((req, res) => {
    let foundUserIndex = users.findIndex((user) => user.id === req.params.id);
    if (foundUserIndex === -1) {
      res.status("404").send("User not found");
    } else {
      let deletedUser = users.splice(foundUserIndex, 1)[0];
      console.log(users);
      res.status("200").json(deletedUser);
    }
  });

module.exports = router;

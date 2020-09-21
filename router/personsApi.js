const express = require("express");
const router = express.Router();

const { v4: uuidv4 } = require("uuid");

const { checkUsername, validate } = require("../validators");

router
  .route("/")
  .get((req, res) => {
    res.json(req.app.locals.users);
  })
  .post([checkUsername], validate, (req, res) => {
    let user = req.body;
    user.id = uuidv4();
    req.app.locals.users.push(user);
    res.status("200").send(user);
  });

router
  .route("/:id")
  .get((req, res) => {
    let foundUser = req.app.locals.users.find(
      (user) => user.id === req.params.id
    );
    if (!foundUser) {
      res.status("404").send("User not found");
    } else res.json(foundUser);
  })
  .delete((req, res) => {
    let foundUserIndex = req.app.locals.users.findIndex(
      (user) => user.id === req.params.id
    );
    if (foundUserIndex === -1) {
      res.status("404").send("User not found");
    } else {
      let deletedUser = req.app.locals.users.splice(foundUserIndex, 1)[0];
      res.status("200").json(deletedUser);
    }
  });

module.exports = router;

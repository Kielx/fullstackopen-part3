const express = require("express");
const router = express.Router();
const personController = require("../controllers/personController");
const Person = require("../models/Person");

const {
  checkUsername,
  validate,
  checkPhone,
  checkIfUserExists,
} = require("../validators");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const response = await personController.getPersons();
      res.json(response);
    } catch (err) {
      res.status(404).send("Cannot fetch users!");
    }
  })
  .post(
    [checkUsername, checkPhone],
    validate,
    checkIfUserExists,
    async (req, res) => {
      let created = await personController.createPerson(
        req.body.name,
        req.body.phone
      );
      if (created instanceof Error) {
        res.status("400").send("Error creating user");
      } else {
        created = created.toJSON();
        delete created["__v"];
        res.status("200").json(created);
      }
    }
  );

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      let foundUser = await Person.findById(req.params.id);
      res.json(foundUser);
    } catch (e) {
      res.status("404").json({ error: "User not found" });
    }
  })
  .delete(async (req, res) => {
    try {
      let foundUser = await Person.findByIdAndRemove(req.params.id);
      foundUser = foundUser.toJSON();
      delete foundUser["__v"];
      res.status("200").json(foundUser);
    } catch (e) {
      res.status("404").json({ error: "User not found" });
    }
    /*     let foundUserIndex = req.app.locals.users.findIndex(
      (user) => user.id === req.params.id
    );
    if (foundUserIndex === -1) {
      res.status("404").json({ error: "User not found" });
    } else {
      let deletedUser = req.app.locals.users.splice(foundUserIndex, 1)[0];
      res.status("200").json(deletedUser);
    } */
  });

module.exports = router;

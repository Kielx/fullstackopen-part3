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
  .get(personController.getPersons)
  .post(
    [checkUsername, checkPhone],
    validate,
    checkIfUserExists,
    personController.createPerson
  );

router
  .route("/:id")
  .get(personController.getSinglePerson)
  .delete(async (req, res) => {
    try {
      let foundUser = await Person.findByIdAndRemove(req.params.id);
      foundUser = foundUser.toJSON();
      delete foundUser["__v"];
      res.status("200").json(foundUser);
    } catch (e) {
      res.status("404").json({ error: "User not found" });
    }
  })
  .patch(async (req, res) => {
    try {
      let modifiedUser = await Person.findByIdAndUpdate(
        req.params.id,
        {
          phone: req.body.phone,
        },
        { new: true }
      );
      res.status("200").json(modifiedUser);
    } catch (e) {
      return next(e);
      //res.status("400").json({ error: "Failed to modify user" });
    }
  });

module.exports = router;

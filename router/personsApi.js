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
  .delete(personController.deleteSinglePerson)
  .patch(personController.patchSinglePerson);

module.exports = router;

const express = require("express");
const router = express.Router();
const Person = require("../models/Person");

router.route("/info").get(async (req, res) => {
  let persons = await Person.find({});
  res.send(
    `
    <p>Phonebook has info for ${
      persons.length
    } persons </p> <p>${new Date()}</p>`
  );
});

module.exports = router;

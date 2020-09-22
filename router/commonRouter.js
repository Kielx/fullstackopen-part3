const express = require("express");
const router = express.Router();

router.route("/info").get((req, res) => {
  res.send(
    `
    <p>Phonebook has info for ${
      req.app.locals.users
    } persons </p> <p>${new Date()}</p>`
  );
});

module.exports = router;

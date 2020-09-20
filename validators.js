const { check } = require("express-validator");

module.exports = {
  checkUsername: check("name")
    .trim()
    .not()
    .isEmpty()
    .escape()
    .withMessage("Username provided is invalid"),
};

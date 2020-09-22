const { check, validationResult } = require("express-validator");

module.exports = {
  checkUsername: check("name")
    .trim()
    .not()
    .isEmpty()
    .escape()
    .withMessage("Username provided is invalid"),

  checkPhone: check("phone")
    .trim()
    .not()
    .isEmpty()
    .escape()
    .withMessage("Phone number provided is invalid"),

  checkIfUserExists: (req, res, next) => {
    let checkUser = false;
    req.app.locals.users.forEach((user) => {
      if (user.name === req.body.name) {
        checkUser = true;
      }
    });
    if (checkUser) {
      res.status(422).send("Username already exists");
    } else {
      next();
    }
  },

  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
      errors: extractedErrors,
    });
  },
};

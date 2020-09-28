const e = require("express");
const { check, body, validationResult } = require("express-validator");
const errorHandlers = require("./errorHandlers");
const Person = require("./models/Person");

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

  checkIfUserExists: async (req, res, next) => {
    try {
      const user = await Person.find({ name: req.body.name });
      if (user.length > 0) {
        throw new errorHandlers.apiError("Username already exists", user);
      }
      next();
    } catch (e) {
      next(e);
    }
  },

  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const extractedErrors = [];
    errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
    throw new errorHandlers.apiError("Validation failed", extractedErrors);
    //throw extractedErrors;
    /*     return res.status(422).json({
      errors: extractedErrors,
    }); */
  },
};

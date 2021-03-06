const { check, validationResult } = require("express-validator");
const errorHandlers = require("./errorHandlers");
const Person = require("./models/Person");

module.exports = {
  checkUsername: check("name")
    .trim()
    .not()
    .isEmpty()
    .escape()
    .isLength({ min: 3 })
    .withMessage(
      "Username provided is invalid - it must be at least 3 characters long"
    ),

  checkPhone: check("phone")
    .trim()
    .not()
    .isEmpty()
    .escape()
    .isLength({ min: 8 })
    .withMessage(
      "Phone number provided is invalid - it must be at least 8 digits long"
    ),

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

const { check, validationResult } = require("express-validator");

module.exports = {
  checkUsername: check("name")
    .trim()
    .not()
    .isEmpty()
    .escape()
    .withMessage("Username provided is invalid"),

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

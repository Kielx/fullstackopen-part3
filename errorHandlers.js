const apiError = class ApiError extends Error {
  constructor(errorMessage, data) {
    super(errorMessage);
    this.data = data;
    this.name = "ApiError";
  }
};

const errorHandler = (error, req, res, next) => {
  if (error instanceof apiError) {
    res.status("400").json({ errorMessage: error.message, ...req.body });
  } else if (error instanceof Error) {
    res.status("500").json({ errorMessage: error.message, ...req.body });
  }
};
module.exports = { apiError, errorHandler };

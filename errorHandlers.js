const apiError = class ApiError extends Error {
  constructor(message, data) {
    super(message);
    this.data = data;
    this.name = "ApiError";
  }
};

const errorHandler = (error, req, res, next) => {
  if (error instanceof apiError) {
    res.status("400").json({ message: error.message, ...req.body });
  } else if (error instanceof Error) {
    res.status("500").json({ message: error.message, ...req.body });
  }
};
module.exports = { apiError, errorHandler };

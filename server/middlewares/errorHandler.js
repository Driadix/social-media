const errorHandler = (error, req, res, next) => {
  const { statusCode = 500, message } = error;
  return res.status(statusCode).send({
    message: statusCode === 500 ? `Произошла ошибка на сервере, ${message}` : message,
  });
};

export default errorHandler;

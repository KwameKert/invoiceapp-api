
function errorMiddleware(error, req, res, next) {
  if (res.headersSent) {
    next(error)
  }
}

module.exports =  errorMiddleware


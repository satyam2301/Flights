const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = 'Something went wrong while creating airplane';
    ErrorResponse.error = {
      explanation:
        'Model number not found in the incoming request with correct naming parameter!',
    };
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  //   if modelNumber is in correct form then
  next();
}

module.exports = { validateCreateRequest };

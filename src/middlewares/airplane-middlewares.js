const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = 'Something went wrong while creating airplane';
    ErrorResponse.error = new AppError(
      [
        'Model number not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  //   if modelNumber is in correct form then
  next();
}

module.exports = { validateCreateRequest };

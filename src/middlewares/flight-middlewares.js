const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');
const { compareTime } = require('../utils/helpers/datetime-helpers');

function validateCreateRequest(req, res, next) {
  // FOR Check
  if (req.body.arrivalAirportId === req.body.departureAirportId) {
    ErrorResponse.message = 'Something went wrong while creating flight';
    ErrorResponse.error = new AppError(
      ['You Cannot have same arrival and departure airportID'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  // To check arrivalTime is greater than departureTime
  if (!compareTime(req.body.arrivalTime, req.body.departureTime)) {
    ErrorResponse.message = 'Something went wrong while creating flight';
    ErrorResponse.error = new AppError(
      ['You Cannot have arrival time greater than departure time'],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  // FOR flightNumber
  if (!req.body.flightNumber) {
    ErrorResponse.message = 'Something went wrong while creating flight';
    ErrorResponse.error = new AppError(
      [
        'Flight Number not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  //   FOR airplaneId
  if (!req.body.airplaneId) {
    ErrorResponse.message = 'Something went wrong while creating flight';
    ErrorResponse.error = new AppError(
      [
        'Flight airplaneID not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  //  FOR departureAirportId
  if (!req.body.departureAirportId) {
    ErrorResponse.message = 'Something went wrong while creating flight';
    ErrorResponse.error = new AppError(
      [
        'flight departureAirportId not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  //   FOR arrivalAirportId
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = 'Something went wrong while creating flight';
    ErrorResponse.error = new AppError(
      [
        'flight arrivalAirportId not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  //   FOR departureTime
  if (!req.body.departureTime) {
    ErrorResponse.message = 'Something went wrong while creating flight';
    ErrorResponse.error = new AppError(
      [
        'flight departureTime not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  //   FOR arrivalTime
  if (!req.body.arrivalTime) {
    ErrorResponse.message = 'Something went wrong while creating flight';
    ErrorResponse.error = new AppError(
      [
        'flight arrivalTime not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  //   FOR price
  if (!req.body.price) {
    ErrorResponse.message = 'Something went wrong while creating flight';
    ErrorResponse.error = new AppError(
      [
        'flight price not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  //   FOR totalSeats
  if (!req.body.totalSeats) {
    ErrorResponse.message = 'Something went wrong while creating flight';
    ErrorResponse.error = new AppError(
      [
        'Flight totalSeats not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  //   if Name is in correct form then
  next();
}

function validateUpdateSeatsRequest(req, res, next) {
  //   FOR seats
  if (!req.body.seats) {
    ErrorResponse.message = 'Something went wrong updating creating flight';
    ErrorResponse.error = new AppError(
      [
        'seats not found in the incoming request with correct naming parameter!',
      ],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
}
module.exports = {
  validateCreateRequest,
  validateUpdateSeatsRequest,
};

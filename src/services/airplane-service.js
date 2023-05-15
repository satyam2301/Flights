const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');

const airplanerepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplanerepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      'Cannot create a new Airplane object',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplane = await airplanerepository.getAll();
    return airplane;
  } catch (error) {
    throw new AppError(
      'Cannot fetch data of all the airplanes',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplane(id) {
  try {
    const airplane = await airplanerepository.get(id);
    return airplane;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The Airplane you requested is not present',
        error.statusCode
      );
    }
    throw new AppError(
      'Cannot fetch data of airplane with this id',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function destroyAirplane(id) {
  try {
    const response = await airplanerepository.destroy(id);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The Airplane you requested to delete is not present',
        error.statusCode
      );
    }
    throw new AppError(
      'Cannot fetch that airplane',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = { createAirplane, getAirplanes, getAirplane, destroyAirplane };

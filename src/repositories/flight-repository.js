const CrudRepository = require('./crud-repository');
const { Flight, Airplane, Airport, City } = require('../models');
const { Sequelize } = require('sequelize');

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          as: 'airplaneDetails',
          required: true,
          attributes: ['modelNumber', 'capacity'],
        },
        {
          model: Airport,
          as: 'departureAirport',
          required: true,
          on: {
            col1: Sequelize.where(
              Sequelize.col('Flight.departureAirportId'),
              '=',
              Sequelize.col('departureAirport.code')
            ),
          },
          attributes: ['name'],
          include: [
            {
              model: City,
              required: true,
              attributes: ['name'],
            },
          ],
        },
        {
          model: Airport,
          as: 'arrivalAirport',
          required: true,
          on: {
            col1: Sequelize.where(
              Sequelize.col('Flight.arrivalAirportId'),
              '=',
              Sequelize.col('arrivalAirport.code')
            ),
          },
          attributes: ['name'],
          include: [
            {
              model: City,
              required: true,
              attributes: ['name'],
            },
          ],
        },
      ],
    });
    return response;
  }
}

module.exports = FlightRepository;

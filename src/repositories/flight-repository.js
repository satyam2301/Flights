const CrudRepository = require('./crud-repository');
const { Flight, Airplane, Airport, City } = require('../models');
const { Sequelize } = require('sequelize');
const db = require('../models');

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

  async updateRemainingSeats(flightId, seats, dec = true) {
    await db.sequelize.query(
      `SELECT * FROM Flights WHERE Flights.id = ${flightId} FOR UPDATE;`
    );
    const flight = await Flight.findByPk(flightId);
    if (parseInt(dec)) {
      await flight.decrement('totalSeats', { by: seats });
    } else {
      await flight.increment('totalSeats', { by: seats });
    }
    return flight;
  }
}

module.exports = FlightRepository;

const { AirplaneRepository } = require('../repositories');

const airplanerepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplanerepository.create(data);
    return airplane;
  } catch (err) {
    throw err;
  }
}
module.exports = { createAirplane };

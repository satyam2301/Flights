const express = require('express');
const { FlightController } = require('../../controllers');
const { FlightMiddlewares } = require('../../middlewares');
const router = express.Router();

/*
 * Post -> url=> /api/v1/airports/
 */
router.post(
  '/',
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

/*
 * GET -> url=> /api/v1/flights?trips=mum-del
 */
router.get('/', FlightController.getAllFlights);
/*
 * GET -> url=> /api/v1/airports/id
 */

/*
 * DELETE -> url=> /api/v1/airports/id
 */

module.exports = router;

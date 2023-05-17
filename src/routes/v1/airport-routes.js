const express = require('express');
const { AirportController } = require('../../controllers');
const { AirportMiddlewares } = require('../../middlewares');
const router = express.Router();

/*
 * Post -> url=> /api/v1/airports/
 */
router.post(
  '/',
  AirportMiddlewares.validateCreateRequest,
  AirportController.createAirport
);

/*
 * GET -> url=> /api/v1/airports/
 */

router.get('/', AirportController.getAirports);

/*
 * GET -> url=> /api/v1/airports/id
 */
router.get('/:id', AirportController.getAirport);

/*
 * DELETE -> url=> /api/v1/airports/id
 */
router.delete('/:id', AirportController.destroyAirport);

module.exports = router;

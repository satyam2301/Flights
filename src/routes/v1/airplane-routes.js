const express = require('express');
const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');
const router = express.Router();

/*
 * Post -> url=> /api/v1/airplanes/
 */
router.post(
  '/',
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

/*
 * GET -> url=> /api/v1/airplanes/
 */

router.get('/', AirplaneController.getAirplanes);

/*
 * GET -> url=> /api/v1/airplanes/id
 */
router.get('/:id', AirplaneController.getAirplane);

/*
 * DELETE -> url=> /api/v1/airplanes/id
 */
router.delete('/:id', AirplaneController.destroyAirplane);

module.exports = router;

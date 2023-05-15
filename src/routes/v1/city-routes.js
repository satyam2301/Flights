const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddlewares } = require('../../middlewares');
const router = express.Router();

/*
 * Post -> url=> /api/v1/cities/
 */
router.post(
  '/',
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

/*
 * Get -> url=> /api/v1/cities/
 */
router.get('/', CityController.getCities);

/*
 * Get -> url=> /api/v1/cities/:id
 */
router.get('/:id', CityController.getCity);

module.exports = router;

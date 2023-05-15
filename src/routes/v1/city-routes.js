const express = require('express');
const { CityController } = require('../../controllers');
const router = express.Router();

/*
 * Post -> url=> /api/v1/cities/
 */
router.post('/', CityController.createCity);

/*
 * Get -> url=> /api/v1/cities/
 */
router.get('/', CityController.getCities);

/*
 * Get -> url=> /api/v1/cities/:id
 */
router.get('/:id', CityController.getCity);

module.exports = router;

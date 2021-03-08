const express = require('express');
const producsController = require('../../controllers/api/productsController');
const router = express.Router()


router.get('/products/latest', producsController.latest)
router.get('/products/offers', producsController.offers)
 



module.exports =router
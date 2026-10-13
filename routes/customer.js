const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer');

const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', customerController.getAll);

router.get('/:id', customerController.getSingle);

router.post('/', customerController.createCustomer);

router.put('/:id', customerController.updateCustomer);

router.delete('/:id', customerController.deleteCustomer);

module.exports = router;;
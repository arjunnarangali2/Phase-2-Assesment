const express = require('express');
const router = express.Router();
const employeeRegistrationRoutes = require('./employeeRegistration.route');
const travelRequest=require('./travelRequest.route')

router.use('/employeeRegistrations', employeeRegistrationRoutes);
router.use('/travelRequest',travelRequest)
module.exports = router;


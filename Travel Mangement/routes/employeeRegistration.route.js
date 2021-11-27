const express = require('express');
const router = express.Router()
const employeeRegistrationController = require('../controller/employeeRegistration.controller');

router.post('/', employeeRegistrationController.addEmployeeRegistration);
router.get('/', employeeRegistrationController.findEmployeeRegistrations);
router.get('/:emp_id', employeeRegistrationController.findEmployeeRegistrationByEmpRequestId);
router.put('/:emp_id', employeeRegistrationController.updateEmployeeRegistration);
router.delete('/:emp_id', employeeRegistrationController.deleteByEmpRequestId);

module.exports = router;
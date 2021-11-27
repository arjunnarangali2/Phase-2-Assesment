const employeeRegistrationDao = require('../dao/employeeRegistration.dao');
var employeeRegistrationController = {
    addEmployeeRegistration: addEmployeeRegistration,
    findEmployeeRegistrations: findEmployeeRegistrations,
    findEmployeeRegistrationByEmpRequestId: findEmployeeRegistrationByEmpRequestId,
    updateEmployeeRegistration: updateEmployeeRegistration,
    deleteByEmpRequestId: deleteByEmpRequestId
}

function addEmployeeRegistration(req, res) {
    let employeeRegistration = req.body;
    employeeRegistrationDao.create(employeeRegistration).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEmployeeRegistrationByEmpRequestId(req, res) {
    employeeRegistrationDao.findByEmpRequestId(req.params.emp_id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteByEmpRequestId(req, res) {
    employeeRegistrationDao.deleteByEmpRequestId(req.params.emp_id).
        then((data) => {
            res.status(200).json({
                message: "EmployeeRegistration deleted successfully",
                employeeRegistration: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateEmployeeRegistration(req, res) {
    employeeRegistrationDao.updateEmployeeRegistration(req.body, req.params.emp_id).
        then((data) => {
            res.status(200).json({
                message: "EmployeeRegistration updated successfully",
                employeeRegistration: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findEmployeeRegistrations(req, res) {
    employeeRegistrationDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = employeeRegistrationController;
const EmployeeRegistration = require('../models/EmployeeRegistration');
var employeeRegistrationDao = {
    findAll: findAll,
    create: create,
    findByEmpRequestId: findByEmpRequestId,
    deleteByEmpRequestId: deleteByEmpRequestId,
    updateEmployeeRegistration: updateEmployeeRegistration
}

function findAll() {
    return EmployeeRegistration.findAll();
}

function findByEmpRequestId(emp_id) {
    return EmployeeRegistration.findByPk(emp_id);
}

function deleteByEmpRequestId(emp_id) {
    return EmployeeRegistration.destroy({ where: { emp_id: emp_id } });
}

function create(employeeRegistration) {
    var newEmployeeRegistration = new EmployeeRegistration(employeeRegistration);
    return newEmployeeRegistration.save();
}

function updateEmployeeRegistration(employeeRegistration, emp_id) {
    var updateEmployeeRegistration = {
        First_Name: employeeRegistration.First_Name,
        Last_Name: employeeRegistration.Last_Name,
       Age: employeeRegistration.ManufacturingDate,
        Gender: employeeRegistration.Gender,
        Address:employeeRegistration.Address,
        Phone_Number:employeeRegistration.Phone_Number

        


    };
    return EmployeeRegistration.update(updateEmployeeRegistration, { where: { emp_id: emp_id } });
}
module.exports = employeeRegistrationDao;
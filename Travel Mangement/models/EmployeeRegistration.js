const Sequelize = require('sequelize');
const db = require('../config/database');

const EmployeeRegistration = db.define('employeeRegistration', {
    emp_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    First_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Last_Name: {
        type: Sequelize.STRING,
        allowNull: false
    },
   Age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Phone_Number: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = EmployeeRegistration;
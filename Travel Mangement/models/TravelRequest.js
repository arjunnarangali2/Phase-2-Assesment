const Sequelize = require('sequelize');
const db = require('../config/database');

const TravelRequest = db.define('TravelRequest', {
    request_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cause_travel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    source : {
        type: Sequelize.STRING,
        allowNull: false
    },
    destination: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mode : {
        type: Sequelize.STRING,
        allowNull: false
    },
    from_date : {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    to_date : {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    no_days : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    priority: {
        type: Sequelize.STRING,
        allowNull: false
    },
    project_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    employee_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = TravelRequest;
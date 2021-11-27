const { Sequelize } = require('sequelize');
const db = new Sequelize('travel', 'sqlit', 'Welcome123', {
    host: 'localhost',
    dialect: 'sqlite',
    storage:'db.sqlite',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = db;
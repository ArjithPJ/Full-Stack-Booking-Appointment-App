const Sequelize = require('sequelize');

const sequelize = new Sequelize('booking-app', 'root', 'Arjith@2000', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

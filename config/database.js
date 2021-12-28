const { Sequelize } = require('sequelize')

const db = new Sequelize('payuung_dev', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db;
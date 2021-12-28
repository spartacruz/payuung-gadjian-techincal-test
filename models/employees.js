'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employees.belongsTo(models.companies, {
        foreignKey: "company_id"
      })
    }
  };
  employees.init({
    name: DataTypes.STRING(50),
    email: DataTypes.STRING(255),
    phone_number: DataTypes.STRING(16),
    jobtitle: DataTypes.ENUM('manager', 'director', 'staff'),
    company_id: DataTypes.INTEGER(10)
  }, {
    sequelize,
    modelName: 'employees',
  });
  return employees;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      companies.hasMany(models.employees, {
        foreignKey: "company_id"
      })
    }
  };
  companies.init({
    company_name: DataTypes.STRING(50),
    telephone_number: DataTypes.STRING(16),
    is_active: DataTypes.BOOLEAN,
    address: DataTypes.STRING(50)
  }, {
    sequelize,
    modelName: 'companies',
    underscored: true
  });
  return companies;
};
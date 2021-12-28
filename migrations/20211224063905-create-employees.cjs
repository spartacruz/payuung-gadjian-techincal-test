'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10)
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      phone_number: {
        type: Sequelize.STRING(16),
        allowNull: true,
        defaultValue: null
      },
      jobtitle: {
        type: Sequelize.ENUM('manager', 'director', 'staff'),
        allowNull: false
      },
      company_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        references :{
          model: {
            tableName: 'companies',
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // //unutk nambah kolom baru foreign key
    // await queryInterface.addColumn(
    //   'employees', //source
    //   'company_id', //nama key yang mau ditambahkan
    //    {
    //      type: Sequelize.INTEGER(10),
    //      references: {
    //        model: 'companies', //target model
    //        key: 'id', //key acuan / referensi
    //      },
    //      onUpdate: 'CASCADE',
    //      onDelete: 'SET NULL'
    //    }
    // )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('employees');
  }
};
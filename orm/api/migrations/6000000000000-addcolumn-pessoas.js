'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Pessoas', 'deletedAt', {
      allowNull: true,
      type: Sequelize.DATE
  });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pessoas');
  }
};

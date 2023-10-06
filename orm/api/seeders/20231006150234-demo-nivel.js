'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Niveis', [{
        descr_nivel : 'iniciante',
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        descr_nivel : 'medio',
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        descr_nivel : 'avancado',
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        descr_nivel : 'fluente',
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Niveis', null, {}); 
  }
};

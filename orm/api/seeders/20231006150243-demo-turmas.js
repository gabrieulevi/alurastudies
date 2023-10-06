'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Turmas', [{
      nivel_id : 1,
      docente_id : 1,
      data_inicio : new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      nivel_id : 2,
      docente_id : 2,
      data_inicio : new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      nivel_id : 3,
      docente_id : 3,
      data_inicio : new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      nivel_id : 4,
      docente_id : 4,
      data_inicio : new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      nivel_id : 3,
      docente_id : 5,
      data_inicio : new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      nivel_id : 3,
      docente_id : 6,
      data_inicio : new Date(),
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Turmas', null, {}); 
  }
};

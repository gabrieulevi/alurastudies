'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Matriculas', [{
         estudante_id : 1,
         turma_id : 7,
         status : true,
         createdAt : new Date(),
         updatedAt : new Date()
       },{
        estudante_id : 2,
        turma_id : 7,
        status : false,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        estudante_id : 3,
        turma_id : 7,
        status : false,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        estudante_id : 4,
        turma_id : 8,
        status : true,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        estudante_id : 5,
        turma_id : 8,
        status : true,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        estudante_id : 6,
        turma_id : 9,
        status : false,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        estudante_id : 4,
        turma_id : 9,
        status : true,
        createdAt : new Date(),
        updatedAt : new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Matriculas', null, {}); 
    }
};

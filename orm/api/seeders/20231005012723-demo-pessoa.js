'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'John Doe',
        ativo: true,
        email: 'johndoe@email.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jana Doe',
        ativo: true,
        email: 'joanadoe@email.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'maria',
        ativo: true,
        email: 'maria@email.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jose',
        ativo: true,
        email: 'jose@email.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'marcos',
        ativo: true,
        email: 'marcos@email.com',
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'cristian',
        ativo: true,
        email: 'cristian@email.com',
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'margarete',
        ativo: true,
        email: 'johndoe@email.com',
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'jessie',
        ativo: false,
        email: 'jessie@email.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'kanye west',
        ativo: false,
        email: 'kanye@email.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {}); 
  }
};

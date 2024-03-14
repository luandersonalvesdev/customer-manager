import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'customers',
      [
        {
          id: 1,
          full_name: 'John Doe',
          email: 'john_doe@test.com',
          cpf: '12345678901',
          phone_number: '1199988745',
          status_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          full_name: 'John Doe 2',
          email: 'john_doe2@test.com',
          cpf: '12345678902',
          phone_number: '1199988745',
          status_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          full_name: 'John Doe 3',
          email: 'john_doe3@test.com',
          cpf: '12345678903',
          phone_number: '1199988745',
          status_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          full_name: 'John Doe 4',
          email: 'john_doe4@test.com',
          cpf: '12345678904',
          phone_number: '1199988745',
          status_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );

    await queryInterface.sequelize.query("SELECT setval('customers_id_seq', max(id)) FROM customers;");
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('customers', {});
  },
};

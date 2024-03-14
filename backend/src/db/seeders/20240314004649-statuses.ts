import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'customer_statuses',
      [
        {
          id: 1,
          status: 'Ativo',
        },
        {
          id: 2,
          status: 'Inativo',
        },
        {
          id: 3,
          status: 'Aguardando ativação',
        },
        {
          id: 4,
          status: 'Desativado',
        },
      ],
      {},
    );

    await queryInterface.sequelize.query("SELECT setval('customer_statuses_id_seq', max(id)) FROM customer_statuses;");
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('customer_statuses', {});
  },
};

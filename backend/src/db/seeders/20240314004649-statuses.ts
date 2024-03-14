import { QueryInterface } from "sequelize";

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'customer_statuses',
      [
        {
          id: 1,
          name: 'Ativo',
        },
        {
          id: 2,
          name: 'Inativo',
        },
        {
          id: 3,
          name: 'Aguardando ativação',
        },
        {
          id: 4,
          name: 'Desativado',
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

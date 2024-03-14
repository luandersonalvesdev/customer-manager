/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'customer_statuses',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        tableName: 'customer_statuses',
        underscored: true,
        timestamps: false,
      },
    );
  },
  async down(queryInterface) {
    await queryInterface.dropTable('customer_statuses');
  },
};

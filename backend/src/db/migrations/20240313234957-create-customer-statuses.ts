import { Model, QueryInterface, DataTypes } from 'sequelize';
import ICustomerStatus from '../../Interfaces/ICustomerStatus';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICustomerStatus>>(
      'customer_statuses',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
    );
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('customer_statuses');
  },
};

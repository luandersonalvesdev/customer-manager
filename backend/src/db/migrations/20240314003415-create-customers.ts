import { Model, QueryInterface, DataTypes } from 'sequelize';
import ICustomer from '../../Interfaces/ICustomer';

  export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<ICustomer>>('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fullName: {
        field: 'full_name',
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      cpf: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      phoneNumber: {
        field: 'phone_number',
        allowNull: false,
        type: DataTypes.STRING,
      },
      statusId: {
        allowNull: false,
        field: 'status_id',
        type: DataTypes.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'customer_statuses',
          key: 'id',
        },
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('customers');
  },
};

/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const CustomerStatusModel = sequelize.define(
    'CustomerStatus',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      status: { type: DataTypes.STRING, allowNull: false },
    },
    {
      tableName: 'customer_status',
      underscored: true,
      timestamps: false,
    },
  );

  CustomerStatusModel.associate = (models) => {
    CustomerStatusModel.hasMany(
      models.Customer,
      {
        foreignKey: 'id',
        as: 'status',
      },
    );
  };

  return CustomerStatusModel;
};

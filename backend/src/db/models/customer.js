/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const CustomerModel = sequelize.define(
    'Customer',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      full_name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
      phone_number: { type: DataTypes.REAL, allowNull: false },
      status_id: { type: DataTypes.INTEGER, foreignKey: true, allowNull: false },
    },
    {
      tableName: 'customers',
      underscored: true,
      timestamps: true,
    },
  );

  CustomerModel.associate = (models) => {
    CustomerModel.belongsTo(
      models.CustomerStatus,
      {
        foreignKey: 'status_id',
        as: 'status',
      },
    );
  };
  return CustomerModel;
};

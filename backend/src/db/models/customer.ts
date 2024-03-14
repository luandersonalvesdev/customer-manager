import {
  DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional,
} from 'sequelize';
import db from '.';
import SequelizeCustomerStatus from './customerstatus';

class SequelizeCustomer extends Model<InferAttributes<SequelizeCustomer>,
  InferCreationAttributes<SequelizeCustomer>> {
    declare id: CreationOptional<number>;
    declare fullName: string;
    declare email: string;
    declare cpf: string;
    declare phoneNumber: string;
    declare statusId: number;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

SequelizeCustomer.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false, unique: true },
    fullName: { type: DataTypes.STRING, allowNull: false, field: 'full_name' },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
    phoneNumber: { type: DataTypes.STRING, allowNull: false, field: 'phone_number' },
    statusId: { type: DataTypes.INTEGER, allowNull: false, field: 'status_id' },
    createdAt: { type: DataTypes.DATE, allowNull: false, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, allowNull: false, field: 'updated_at' },
  },
  {
    sequelize: db,
    modelName: 'customers',
    underscored: true,
    timestamps: true,
  }
)

SequelizeCustomer.belongsTo(SequelizeCustomerStatus, { foreignKey: 'statusId', as: 'status' });

SequelizeCustomerStatus.hasMany(SequelizeCustomer, { foreignKey: 'statusId', as: 'customers' });

export default SequelizeCustomer;

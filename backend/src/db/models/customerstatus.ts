import {
  DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeCustomerStatus extends Model<InferAttributes<SequelizeCustomerStatus>, 
  InferCreationAttributes<SequelizeCustomerStatus>> {
    declare id: CreationOptional<number>;
    declare status: string;
}

SequelizeCustomerStatus.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  },
  {
    sequelize: db,
    timestamps: false,
    modelName: 'customer_statuses',
  }
);

export default SequelizeCustomerStatus;
import * as joi from 'joi';

const customerSchema = joi.object({
  fullName: joi.string().required(),
  email: joi.string().email().required(),
  phoneNumber: joi.string().length(11).required(),
  cpf: joi.string().length(11).required(),
  statusId: joi.number().required(),
});

export const customerSchemaWithId = joi.object({
  id: joi.number().required(),
  fullName: joi.string().required(),
  email: joi.string().email().required(),
  phoneNumber: joi.string().length(11).required(),
  cpf: joi.string().length(11).required(),
  statusId: joi.number().required(),
});

export default customerSchema;

import * as joi from 'joi';

const customerSchema = joi.object({
  fullName: joi.string().required(),
  email: joi.string().email().required(),
  phoneNumber: joi.string().min(11).required(),
  cpf: joi.string().length(11).required(),
  statusId: joi.number().required(),
});

export default customerSchema;

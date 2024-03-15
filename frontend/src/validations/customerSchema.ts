import { z } from 'zod';

const zCustomerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, 'Name is required.'),
    email: z
      .string()
      .min(1, 'Email is required.')
      .email(),
    cpf: z
      .string()
      .trim()
      .length(11, 'Invalid CPF.'),
    phoneNumber: z
      .string()
      .trim()
      .min(11, 'Invalid phone number.'),
    statusId: z
      .number()
      .min(1, 'status is required.'),
  })
  .required();

export default zCustomerSchema;

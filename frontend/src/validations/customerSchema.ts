import { z } from 'zod';

const zCustomerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(1, 'Nome é obrigatório'),
    email: z
      .string()
      .min(1, 'E-mail é obrigatório')
      .email('E-mail inválido'),
    cpf: z
      .string()
      .trim()
      .length(14, 'CPF inválido'),
    phoneNumber: z
      .string()
      .trim()
      .min(14, 'Telefone deve ter 11 números'),
    statusId: z
      .number()
      .min(1, 'Status é obrigatório'),
  })
  .required();

export default zCustomerSchema;

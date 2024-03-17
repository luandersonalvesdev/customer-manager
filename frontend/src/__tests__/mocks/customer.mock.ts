const VALID_FULL_NAME_MOCK = 'Jorel';
const VALID_EMAIL_MOCK = 'jorel@email.com';
const VALID_CPF_MOCK = '11111111111';
const VALID_PHONE_NUMBER_MOCK = '11111111111';
const STATUS_MOCK = { id: 1, name: 'Ativo' }

export const CUSTOMER_MOCK = {
  id: 1,
  fullName: VALID_FULL_NAME_MOCK,
  email: VALID_EMAIL_MOCK,
  cpf: VALID_CPF_MOCK,
  phoneNumber: VALID_PHONE_NUMBER_MOCK,
  statusId: 1,
  createdAt: new Date(),
  updatedAt: new Date(),
  status: STATUS_MOCK
}

export const CUSTOMERS_WITHOUT_STATUS_MOCK = {
  ...CUSTOMER_MOCK,
  status: {id: 0, name: 'Inválido'}
}

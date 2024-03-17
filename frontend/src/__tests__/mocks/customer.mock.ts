const VALID_FULL_NAME_MOCK = 'Jorel';
const VALID_EMAIL_MOCK = 'jorel@email.com';
const VALID_CPF_MOCK = '11111111111';
const VALID_PHONE_NUMBER_MOCK = '11111111111';
const STATUS_MOCK = { id: 1, name: 'Ativo' }

const VALID_FULL_NAME_2_MOCK = 'Lara';
const VALID_EMAIL_2_MOCK = 'lara@email.com';
const VALID_CPF_2_MOCK = '22222222222';
const VALID_PHONE_NUMBER_2_MOCK = '22222222222';
const STATUS_2_MOCK = { id: 2, name: 'Inativo' }

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

export const CUSTOMER_2_MOCK = {
  id: 2,
  fullName: VALID_FULL_NAME_2_MOCK,
  email: VALID_EMAIL_2_MOCK,
  cpf: VALID_CPF_2_MOCK,
  phoneNumber: VALID_PHONE_NUMBER_2_MOCK,
  statusId: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
  status: STATUS_2_MOCK
}

export const CUSTOMERS_LIST_MOCK = [
  CUSTOMER_MOCK,
  CUSTOMER_2_MOCK
]

export const CUSTOMERS_WITHOUT_STATUS_MOCK = {
  ...CUSTOMER_MOCK,
  status: {id: 0, name: 'Inválido'}
}

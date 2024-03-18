const VALID_FULLNAME_MOCK = 'Jorel';
const VALID_EMAIL_MOCK = 'jorel@test.com';
const VALID_CPF_MOCK = '12312312312';
const VALID_PHONE_NUMBER_MOCK = '75999999999';
const VALID_CREATED_AT_MOCK = '2024-03-15T22:13:00.215Z';
const VALID_UPDATED_AT_MOCK = '2024-03-15T22:13:00.215Z';

export const CUSTOMER_FORM_MOCK = {
  fullName: VALID_FULLNAME_MOCK,
  email: VALID_EMAIL_MOCK,
  cpf: VALID_CPF_MOCK,
  phoneNumber: VALID_PHONE_NUMBER_MOCK,
  statusId: 1,
}

export const INVALID_CUSTOMER_FORM_MOCK = {
  email: VALID_EMAIL_MOCK,
  cpf: VALID_CPF_MOCK,
  phoneNumber: VALID_PHONE_NUMBER_MOCK,
  statusId: 1,
}

export const CUSTOMER_FORM_UPDATE_MOCK = {
  id: 1,
  fullName: VALID_FULLNAME_MOCK,
  email: VALID_EMAIL_MOCK,
  cpf: VALID_CPF_MOCK,
  phoneNumber: VALID_PHONE_NUMBER_MOCK,
  statusId: 1,
}

export const SUCCESS_CUSTOMER_CREATED_MOCK = {
  id: 1,
  fullName: VALID_FULLNAME_MOCK,
  email: VALID_EMAIL_MOCK,
  cpf: VALID_CPF_MOCK,
  phoneNumber: VALID_PHONE_NUMBER_MOCK,
  statusId: 1,
  createdAt: VALID_CREATED_AT_MOCK,
  updatedAt: VALID_UPDATED_AT_MOCK,
}

export const CUSTOMER_WITH_STATUS_MOCK = {
  ...SUCCESS_CUSTOMER_CREATED_MOCK,
  status: {
    id: 1,
    name: 'Ativo',
  }
}

export const SUCCESS_RESPONSE_CREATED_CUSTOMER_MOCK = {
  status: 'CREATED',
  data: SUCCESS_CUSTOMER_CREATED_MOCK
}

export const SUCCESS_RESPONSE_GET_ALL_CUSTOMERS_MOCK = {
  status: 'SUCCESS',
  data: [CUSTOMER_WITH_STATUS_MOCK]
}

export const SUCCESS_RESPONSE_UPDATE_CUSTOMER_MOCK = {
  status: 'SUCCESS',
  data: CUSTOMER_FORM_UPDATE_MOCK
}

export const SUCCESS_RESPONSE_GET_BY_ID_CUSTOMER_MOCK = {
  status: 'SUCCESS',
  data: CUSTOMER_WITH_STATUS_MOCK
}

export const ERROR_RESPONSE_CREATED_CUSTOMER_INVALID_MOCK = {
  status: 'BAD_REQUEST',
  data: { message: 'fullName is required' }
}

export const ERROR_RESPONSE_UPDATED_CUSTOMER_INVALID_MOCK = {
  status: 'BAD_REQUEST',
  data: { message: '"id" is required' }
}

export const ERROR_RESPONSE_CREATED_CUSTOMER_EXISTS_MOCK = {
  status: 'CONFLICT',
  data: { message: 'Email or CPF already exists' }
}

export const ERROR_RESPONSE_GET_BY_ID_CUSTOMER_MOCK = {
  status: 'NOT_FOUND',
  data: { message: 'Customer not found.' }
}

export const ERROR_RESPONSE_GET_BY_ID_THROW_CUSTOMER_MOCK = {
  status: 'BAD_REQUEST',
  data: { message: 'Id is not a number.' }
}

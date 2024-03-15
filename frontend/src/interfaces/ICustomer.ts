export default interface ICustomer {
  id: number
  fullName: string
  email: string
  cpf: string
  phoneNumber: string
  statusId: number
  createdAt: Date
  updatedAt: Date
  status: {
    id: number
    name: string
  }
}

export interface ICustomerForm {
  fullName: string
  email: string
  cpf: string
  phoneNumber: string
  statusId: number
}

export interface ICustomerFormWithId {
  id: number
  fullName: string
  email: string
  cpf: string
  phoneNumber: string
  statusId: number
}

import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import SequelizeCustomer from '../../../src/db/models/customer';
import CustomerService from '../../../src/services/CustomerService';
import customerSchema from '../../../src/validations/customerSchema';
import {
  CUSTOMER_FORM_MOCK, SUCCESS_RESPONSE_CREATED_CUSTOMER_MOCK, INVALID_CUSTOMER_FORM_MOCK, ERROR_RESPONSE_CREATED_CUSTOMER_INVALID_MOCK,
  ERROR_RESPONSE_CREATED_CUSTOMER_EXISTS_MOCK, SUCCESS_RESPONSE_GET_ALL_CUSTOMERS_MOCK, SUCCESS_RESPONSE_UPDATE_CUSTOMER_MOCK,
  CUSTOMER_FORM_UPDATE_MOCK, ERROR_RESPONSE_UPDATED_CUSTOMER_INVALID_MOCK
} from '../../mocks/customer.mock';

describe('Customer Service Unit Tests', () => {

  afterEach(() => sinon.restore());

  describe('SUCCESS CASES', () => {
    it('Should create a new customer', async () => {
      sinon.stub(SequelizeCustomer, 'findOrCreate').resolves([SUCCESS_RESPONSE_CREATED_CUSTOMER_MOCK.data, true] as any);
      sinon.stub(customerSchema, 'validate').returns({} as any);
  
      const customerService = new CustomerService();
  
      const response = await customerService.createCustomer(CUSTOMER_FORM_MOCK as any);
  
      expect(response.status).to.be.equal(SUCCESS_RESPONSE_CREATED_CUSTOMER_MOCK.status);
      expect(response.data).to.be.deep.equal(SUCCESS_RESPONSE_CREATED_CUSTOMER_MOCK.data);
    });

    it('Should get all customers', async () => {
      sinon.stub(SequelizeCustomer, 'findAll').resolves(SUCCESS_RESPONSE_GET_ALL_CUSTOMERS_MOCK.data as any);
  
      const customerService = new CustomerService();
  
      const response = await customerService.getAllCustomers(10, 0);
  
      expect(response.status).to.be.equal(SUCCESS_RESPONSE_GET_ALL_CUSTOMERS_MOCK.status);
      expect(response.data).to.be.deep.equal(SUCCESS_RESPONSE_GET_ALL_CUSTOMERS_MOCK.data);
    });

    it('Should update a customer', async () => {
      sinon.stub(SequelizeCustomer, 'findOne').resolves(null);
      sinon.stub(SequelizeCustomer, 'update');
      sinon.stub(customerSchema, 'validate').returns({} as any);
  
      const customerService = new CustomerService();
  
      const response = await customerService.updateCustomer(SUCCESS_RESPONSE_UPDATE_CUSTOMER_MOCK.data as any);
  
      expect(response.status).to.be.equal(SUCCESS_RESPONSE_UPDATE_CUSTOMER_MOCK.status);
      expect(response.data).to.be.deep.equal(SUCCESS_RESPONSE_UPDATE_CUSTOMER_MOCK.data);
    });
  });

  describe('ERROR CASES', () => {
    it('Should NOT create, Email or CPF already exists', async () => {
      sinon.stub(SequelizeCustomer, 'findOrCreate').resolves([, false] as any);
      sinon.stub(customerSchema, 'validate').returns({} as any);
  
      const customerService = new CustomerService();
  
      const response = await customerService.createCustomer(CUSTOMER_FORM_MOCK as any);
  
      expect(response.status).to.be.equal(ERROR_RESPONSE_CREATED_CUSTOMER_EXISTS_MOCK.status);
      expect(response.data).to.be.deep.equal(ERROR_RESPONSE_CREATED_CUSTOMER_EXISTS_MOCK.data);
    });

    it('Should NOT create, invalid data', async () => {
      sinon.stub(customerSchema, 'validate').returns({ error: { message: 'fullName is required'} } as any);
  
      const customerService = new CustomerService();
  
      const response = await customerService.createCustomer(INVALID_CUSTOMER_FORM_MOCK as any);
  
      expect(response.status).to.be.equal(ERROR_RESPONSE_CREATED_CUSTOMER_INVALID_MOCK.status);
      expect(response.data).to.be.deep.equal(ERROR_RESPONSE_CREATED_CUSTOMER_INVALID_MOCK.data);
    });

    it('Should NOT update a customer, Email or CPF already exists', async () => {
      sinon.stub(SequelizeCustomer, 'findOne').resolves(true as any);
      sinon.stub(customerSchema, 'validate').returns({} as any);
  
      const customerService = new CustomerService();
  
      const response = await customerService.updateCustomer(CUSTOMER_FORM_UPDATE_MOCK as any);
  
      expect(response.status).to.be.equal(ERROR_RESPONSE_CREATED_CUSTOMER_EXISTS_MOCK.status);
      expect(response.data).to.be.deep.equal(ERROR_RESPONSE_CREATED_CUSTOMER_EXISTS_MOCK.data);
    });

    it('Should NOT update a customer, invalid data', async () => {
      sinon.stub(customerSchema, 'validate').returns({ error: { message: 'fullName is required'} } as any);
  
      const customerService = new CustomerService();
  
      const response = await customerService.updateCustomer(INVALID_CUSTOMER_FORM_MOCK as any);
  
      expect(response.status).to.be.equal(ERROR_RESPONSE_UPDATED_CUSTOMER_INVALID_MOCK.status);
      expect(response.data).to.be.deep.equal(ERROR_RESPONSE_UPDATED_CUSTOMER_INVALID_MOCK.data);
    });
  });

});

import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import CustomerService from '../../../src/services/CustomerService';
import CustomerController from '../../../src/controllers/CustomerController';
import {
  CUSTOMER_FORM_MOCK, SUCCESS_RESPONSE_CREATED_CUSTOMER_MOCK, SUCCESS_RESPONSE_GET_ALL_CUSTOMERS_MOCK
} from '../../mocks/customer.mock';

describe('Customer Controller Unit Tests', () => {

  afterEach(() => sinon.restore());

  it('Should create a new customer', async () => {
    sinon.stub(CustomerService.prototype, 'createCustomer').resolves(SUCCESS_RESPONSE_CREATED_CUSTOMER_MOCK as any);
    const req: Partial<Request> = { body: CUSTOMER_FORM_MOCK };
    const res: Partial<Response> = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const customerController = new CustomerController();

    await customerController.createCustomer(req as Request, res as Response);

    expect((res.status as sinon.SinonStub).calledOnce).to.be.true;
    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;

    expect((res.json as sinon.SinonStub).calledOnce).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(SUCCESS_RESPONSE_CREATED_CUSTOMER_MOCK.data)).to.be.true;
  });

  it('Should get all customers', async () => {
    sinon.stub(CustomerService.prototype, 'getAllCustomers').resolves(SUCCESS_RESPONSE_GET_ALL_CUSTOMERS_MOCK as any);
    const req: Partial<Request> = { query: { limit: "10", offset: "0" } };
    const res: Partial<Response> = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const customerController = new CustomerController();

    await customerController.getAllCustomers(req as Request, res as Response);

    expect((res.status as sinon.SinonStub).calledOnce).to.be.true;
    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;

    expect((res.json as sinon.SinonStub).calledOnce).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(SUCCESS_RESPONSE_GET_ALL_CUSTOMERS_MOCK.data)).to.be.true;
  });
});
import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response } from 'express';
import CustomerStatusService from '../../../src/services/CustomerStatusService';
import CustomerStatusController from '../../../src/controllers/CustomerStatusController';
import {
  SUCCESS_RESPONSE_GET_ALL_MOCK
} from '../../mocks/customerStatus.mock';

describe('Customer Controller Unit Tests', () => {

  afterEach(() => sinon.restore());

  it('Should get all customers', async () => {
    sinon.stub(CustomerStatusService.prototype, 'getAllCustomerStatuses').resolves(SUCCESS_RESPONSE_GET_ALL_MOCK as any);
    const req: Partial<Request> = {};
    const res: Partial<Response> = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const customerStatusController = new CustomerStatusController();

    await customerStatusController.getAllCustomerStatuses(req as Request, res as Response);

    expect((res.status as sinon.SinonStub).calledOnce).to.be.true;
    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;

    expect((res.json as sinon.SinonStub).calledOnce).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(SUCCESS_RESPONSE_GET_ALL_MOCK.data)).to.be.true;
  });
});

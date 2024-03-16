import { describe, it } from 'mocha';
import { expect } from 'chai';
import * as sinon from 'sinon';
import SequelizeCustomerStatus from '../../../src/db/models/customerstatus';
import CustomerStatusService from '../../../src/services/CustomerStatusService';
import { SUCCESS_RESPONSE_GET_ALL_MOCK } from '../../mocks/customerStatus.mock';

describe('Customer Service Unit Tests', () => {

  afterEach(() => sinon.restore());

  describe('SUCCESS CASES', () => {

    it('Should get all customers', async () => {
      sinon.stub(SequelizeCustomerStatus, 'findAll').resolves(SUCCESS_RESPONSE_GET_ALL_MOCK.data as any);
  
      const customerStatusService = new CustomerStatusService();
  
      const response = await customerStatusService.getAllCustomerStatuses();
  
      expect(response.status).to.be.equal(SUCCESS_RESPONSE_GET_ALL_MOCK.status);
      expect(response.data).to.be.deep.equal(SUCCESS_RESPONSE_GET_ALL_MOCK.data);
    });

  });
});

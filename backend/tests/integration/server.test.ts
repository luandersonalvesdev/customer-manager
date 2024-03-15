import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import { app } from '../../src/app';
import { describe, it } from 'mocha';

chai.use(chaiHttp);
const { expect } = chai;

describe('Server health.', function() {
  it('Should return status 200 and a text.', async function() {
    const response = await chai.request(app).get('/')

    expect(response.status).to.be.equal(200);
    expect(response.text).to.be.equal('Server is healthy! <a href="https://github.com/luandersonalvesdev/customer-manager"> Click here</a> to see the documentation.');
  });
});
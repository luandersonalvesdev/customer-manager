import { describe, it } from 'mocha';
import { expect } from 'chai';
import mapStatusHTTP from "../../../src/utils/mapStatusHTTP";

describe('mapStatusHTTP Unit Tests', () => {
  it('Should return the correct status', () => {
    expect(mapStatusHTTP('SUCCESS')).to.be.equal(200);
    expect(mapStatusHTTP('CREATED')).to.be.equal(201);
    expect(mapStatusHTTP('BAD_REQUEST')).to.be.equal(400);
    expect(mapStatusHTTP('CONFLICT')).to.be.equal(409);
    expect(mapStatusHTTP('INTERNAL_SERVER_ERROR')).to.be.equal(500);
    expect(mapStatusHTTP('SUCCESS')).to.be.equal(200);
    expect(mapStatusHTTP('NOT_FOUND')).to.be.equal(404);
  });
})
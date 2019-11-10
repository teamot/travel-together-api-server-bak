import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import {
  JWTPayload,
  verifyAndDecode,
  JWTAttributes
} from '../../../src/core/jwt';

chai.use(chaiAsPromised);
const expect = chai.expect;
import * as constants from '../../../src/constants';

describe('core/jwt', () => {
  let jwtSecretStub: sinon.SinonStub<any[], any>;

  function stubJwtSecret(secret: string) {
    jwtSecretStub = sinon
      .stub(constants, 'Secrets')
      .value({ JWT_SECRET: secret });
  }

  function restoreJwtSecretStub() {
    jwtSecretStub.restore();
  }

  const exp = 9999999999;
  const payload: JWTAttributes = {
    id: 'sample_id',
    oauthId: 'sample_oauth_id'
  };
  const JWT_SECRET = 'secret';
  const jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNhbXBsZV9pZCIsIm9hdXRoSWQiOiJzYW1wbGVfb2F1dGhfaWQiLCJleHAiOjk5OTk5OTk5OTl9.MYsZVZvJ4v274ivzD6NZP1pShyiwsucbM93eTXOPOrw';

  describe('JWTPayload#encode()', () => {
    it('환경변수 JWT_SECRET이 정의되어 있지 않은 경우 예외를 던진다', async () => {
      const jwtPayload = new JWTPayload(payload);
      await expect(jwtPayload.encode()).to.eventually.be.rejectedWith(Error);
    });

    // jwt 생성 웹 사이트: https://jwt.io/
    it('jwt 문자열을 반환한다.', async () => {
      stubJwtSecret(JWT_SECRET);
      const jwtPayload = new JWTPayload(payload);
      await expect(jwtPayload.encode()).to.eventually.length.greaterThan(100);

      restoreJwtSecretStub();
    });
  });

  describe('verifyAndDecode()', () => {
    it('환경변수 JWT_SECRET이 정의되어 있지 않은 경우 예외를 던진다', async () => {
      const promise = verifyAndDecode(jwt);

      await expect(promise).to.eventually.be.rejectedWith(Error);
    });

    it('올바른 페이로드를 반환한다', async () => {
      stubJwtSecret(JWT_SECRET);
      const decodedPayload = await verifyAndDecode(jwt);

      expect(decodedPayload).not.to.be.null;
      expect(decodedPayload.id).to.equal(payload.id);
      expect(decodedPayload.oauthId).to.equal(payload.oauthId);
      expect(decodedPayload.exp).to.equal(exp);
      restoreJwtSecretStub();
    });
  });
});

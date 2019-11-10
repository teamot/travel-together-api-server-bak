import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import { decodeToken } from '../../../src/core/auth';

chai.use(chaiAsPromised);
const expect = chai.expect;
import * as constants from '../../../src/constants';

// jwt 생성 웹 사이트: https://jwt.io
describe('core/auth', () => {
  let jwtSecretStub: sinon.SinonStub<any[], any>;

  function stubJwtSecret(secret: string) {
    jwtSecretStub = sinon
      .stub(constants, 'Secrets')
      .value({ JWT_SECRET: secret });
  }

  function restoreJwtSecretStub() {
    jwtSecretStub.restore();
  }

  const payload = {
    id: 'sample_id',
    oauthId: 'sample_oauth_id',
    exp: 9999999999
  };
  const JWT_SECRET = 'secret';
  const jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNhbXBsZV9pZCIsIm9hdXRoSWQiOiJzYW1wbGVfb2F1dGhfaWQiLCJleHAiOjk5OTk5OTk5OTl9.MYsZVZvJ4v274ivzD6NZP1pShyiwsucbM93eTXOPOrw';

  describe('decodeToken', () => {
    it('환경변수 JWT_SECRET이 정의되어 있지 않은 경우 예외를 던진다', async () => {
      const promise = await decodeToken(jwt);

      expect(promise).to.be.null;
    });

    it('올바르지 않은 토큰이 전달될 경우 null을 반환한다', async () => {
      stubJwtSecret(JWT_SECRET);
      const malformedJwt = jwt.substr(0, jwt.length - 1) + 'c';
      const token = await decodeToken(malformedJwt);

      expect(token).to.be.null;
      restoreJwtSecretStub();
    });

    it('토큰이 전달되지 않은 경우 null을 반환한다', async () => {
      stubJwtSecret(JWT_SECRET);
      const token = await decodeToken(undefined);

      expect(token).to.be.null;
      restoreJwtSecretStub();
    });

    it('올바른 페이로드를 반환한다', async () => {
      stubJwtSecret(JWT_SECRET);
      const result = await decodeToken(jwt);

      expect(result).to.include(payload);
      restoreJwtSecretStub();
    });
  });
});

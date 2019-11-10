import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { makePipeOptions } from '../../../src/validations/validation-pipe-options';
import { ValidationError } from '@nestjs/common/interfaces/external/validation-error.interface';

chai.use(chaiAsPromised);
const expect = chai.expect;
import * as constants from '../../../src/constants';

// jwt 생성 웹 사이트: https://jwt.io
describe('validations/validation-pipe-options', () => {
  describe('makePipeOptions()', () => {
    it('파라미터로 전달한 메시지를 담은 객체를 반환한다 ', async () => {
      const errorMessage = 'Hello World';
      const validationError: ValidationError = {
        target: {},
        property: 'name',
        value: null,
        constraints: {},
        children: []
      };

      const pipeOptions = makePipeOptions(errorMessage);
      expect(pipeOptions.transform).to.be.true;
      expect(pipeOptions.exceptionFactory).not.to.be.undefined;
      expect(
        pipeOptions.exceptionFactory &&
          pipeOptions.exceptionFactory([validationError])
      ).to.have.property('message', errorMessage);
    });

    it('파라미터로 전달한 함수의 반환 값을 메시지로 가지는 객체를 반환한다 ', async () => {
      const validationError: ValidationError = {
        target: {},
        property: 'name',
        value: null,
        constraints: {},
        children: []
      };

      const pipeOptions = makePipeOptions(
        (errors: ValidationError[]): string => {
          return `${errors[0].property} is invalid`;
        }
      );
      expect(pipeOptions.transform).to.be.true;
      expect(pipeOptions.exceptionFactory).not.to.be.undefined;
      expect(
        pipeOptions.exceptionFactory &&
          pipeOptions.exceptionFactory([validationError])
      ).to.have.property('message', 'name is invalid');
    });
  });
});

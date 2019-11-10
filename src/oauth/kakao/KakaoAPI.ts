import {
  AbstractExternalAccountAPI,
  UserValidationResponse,
  APIRequest,
  AccessToken,
  RequestMethods,
  APIErrorHandler
} from '../base';
import request from 'request-promise';
import { RequestError } from 'request-promise/errors';
import { HttpException, HttpStatus } from '@nestjs/common';

interface KakaoUserValidationResponse extends UserValidationResponse {
  id: string;
  expiresInMillis: number;
  appId: number;
}

export class KakaoAPI extends AbstractExternalAccountAPI {
  public readonly errorHandler = new KakaoAPIErrorHandler();

  public async validate(
    accessToken: AccessToken
  ): Promise<KakaoUserValidationResponse> {
    const validationRequest = this.getValidationRequest(accessToken);
    const result = (await this.sendRequest(
      validationRequest
    )) as KakaoUserValidationResponse;
    return result;
  }

  private getValidationRequest(accessToken: AccessToken): APIRequest {
    const uri = 'https://kapi.kakao.com/v1/user/access_token_info';
    const method = RequestMethods.GET;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    };

    return { uri, method, headers };
  }
}

export class KakaoAPIErrorHandler implements APIErrorHandler {
  public throwAppropriateError(response: RequestError): never {
    const error = JSON.parse(response.error);
    switch (error.code) {
      case -401:
        throw new HttpException(error.msg, HttpStatus.UNAUTHORIZED);
      case -2:
        throw new HttpException(error.msg, HttpStatus.BAD_REQUEST);
      default:
        throw new HttpException(error.msg, HttpStatus.BAD_REQUEST);
    }
  }
}

import { AccessToken, UserValidationResponse, APIRequest } from './types';
import request from 'request-promise';
import { RequestError } from 'request-promise/errors';

interface ExternalAccountAPI {
  validate(accessToken: AccessToken): Promise<UserValidationResponse>;
}

export abstract class AbstractExternalAccountAPI implements ExternalAccountAPI {
  public abstract validate(
    accessToken: string
  ): Promise<UserValidationResponse>;
  protected sendRequest(apiRequest: APIRequest) {
    return request({
      uri: apiRequest.uri,
      headers: apiRequest.headers,
      body: apiRequest.body,
      qs: apiRequest.query,
      useQuerystring: apiRequest.query ? true : false
    });
  }

  public abstract get errorHandler(): APIErrorHandler;
}

export interface APIErrorHandler {
  throwAppropriateError(response: RequestError): never;
}

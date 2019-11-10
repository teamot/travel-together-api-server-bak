export type AccessToken = string;
export type UserValidationResponse = {
  [propertyKey: string]: string | number | null;
};

export enum RequestMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export interface APIRequest {
  uri: string;
  method: RequestMethods;
  headers?: {
    [key: string]: string;
  };
  body?: object;
  query?: {
    [key: string]: string;
  };
}

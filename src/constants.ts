export enum Providers {
  SEQUELIZE = 'SEQUELIZE',
  USER_TABLE = 'USER_TABLE'
}

export enum Headers {
  AUTHORIZATION = 'Authorization'
}

interface Secrets {
  JWT_SECRET?: string;
}

export const Secrets: Secrets = {
  JWT_SECRET: process.env.JWT_SECRET
};
Object.freeze(Secrets);

export enum ErrorMsgs {
  BAD_REQUEST = '요청이 올바르지 않습니다',
  ADD_USER_WITH_OAUTH = 'OAUTH 인증 정보가 올바르지 않습니다'
}

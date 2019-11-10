import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { AddUserWithOauthDto } from '../dto/users';
import { KakaoAPI, KakaoAPIErrorHandler } from '../oauth/kakao/KakaoAPI';
import { UserDao } from '../dao/User';
import { JWTPayload, JWTAttributes } from '../core/jwt';
import { getApi } from '../oauth';
import { RequestError } from 'request-promise/errors';

@Injectable()
export class UserService {
  public constructor(private userDao: UserDao) {}

  public async updateOauthUserAndIssueToken(
    oauthDto: AddUserWithOauthDto
  ): Promise<string> {
    const api = getApi(oauthDto.resourceServer);

    // 에러 응답에 대한 에러처리
    // 참고: https://developers.kakao.com/docs/restapi/user-management#%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%86%A0%ED%81%B0-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC-%EB%B0%8F-%EC%A0%95%EB%B3%B4-%EC%96%BB%EA%B8%B0
    try {
      const validationResult = await api.validate(oauthDto.accessToken);
    } catch (err) {
      api.errorHandler.throwAppropriateError(err);
    }

    // 데이터베이스에 User upsert
    const isNew = await this.userDao.insertOrUpdate({
      oauthId: oauthDto.id,
      oauthServer: oauthDto.resourceServer,
      oauthToken: oauthDto.accessToken
    });

    if (isNew) {
      // upsert 결과가 true이면 (새로 생성된것이면)
      // oauthServer에서 유저 정보 조회 후 Profile 테이블에 생성하고
    }

    const user = await this.userDao.findByOAuthId(oauthDto.id).value();
    if (!user) {
      throw new HttpException(
        'Tried to find the user upserted just before, but could not find it.',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }

    const payload: JWTAttributes = {
      id: user.id,
      oauthId: user.oauthId
    };

    return await new JWTPayload(payload).encode();
  }
}

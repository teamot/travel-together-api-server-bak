import { Injectable, Inject } from '@nestjs/common';
import { Providers } from '../constants';
import { User, UserAttributes } from '../database/models/User';
import { usersProviders } from '../database/providers/users';
import { Model } from 'sequelize-typescript';

@Injectable()
export class UserDao {
  constructor(@Inject(Providers.USER_TABLE) private user: typeof User) {}

  public insertOrUpdate(user: UserAttributes) {
    return this.user.upsert(user);
  }

  public findByOAuthId(oauthId: string) {
    return this.user.findOne({ where: { oauthId } });
  }
}

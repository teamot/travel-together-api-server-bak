import { Module } from '@nestjs/common';

import { usersProviders } from '../database/providers/users';
import { DatabaseModule } from './database';

@Module({
  imports: [DatabaseModule],
  providers: [...usersProviders]
})
export class UserModule {}

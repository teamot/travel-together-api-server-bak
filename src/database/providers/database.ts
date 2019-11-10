import config from 'config';
import { Sequelize } from 'sequelize-typescript';
import { Provider } from '@nestjs/common';
import { User } from '../models/User';
import { Providers } from '../../constants';

export const databaseProviders: Provider[] = [
  {
    provide: Providers.SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(config.get('dbConfig'));
      sequelize.addModels([User]);
      await sequelize.sync({ force: true });
      return sequelize;
    }
  }
];

import { Table, Column, DataType, Model } from 'sequelize-typescript';

export interface UserAttributes {
  id?: string;
  encryptedPassword?: string;
  oauthId?: string;
  oauthToken?: string;
  oauthServer?: string;
}

@Table({
  indexes: [
    {
      fields: ['oauth_id'],
      unique: true
    }
  ]
})
export class User extends Model<User> implements UserAttributes {
  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID
  })
  id: string;

  @Column({
    type: DataType.STRING(32),
    allowNull: false
  })
  encryptedPassword: string;

  @Column
  oauthId: string;

  @Column({
    type: DataType.STRING(54)
  })
  oauthToken: string;

  @Column({
    type: DataType.STRING(32)
  })
  oauthServer: string;
  // @Column
  // home: string[];
}

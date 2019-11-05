import { Table, Column, DataType, Model } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
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

  @Column({
    type: DataType.STRING(54)
  })
  accessToken: string;

  @Column({
    type: DataType.STRING(54)
  })
  @Column
  refreshToken: string;

  @Column
  name: string;

  @Column
  pictureUri: string;

  // @Column
  // home: string[];
}

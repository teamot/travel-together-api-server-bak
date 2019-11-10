import { IsString, IsInt, IsEnum } from 'class-validator';
import { ResourceServers } from '../oauth/resourceServers';

export class AddUserWithOauthDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly accessToken: string;

  @IsString()
  @IsEnum(ResourceServers)
  readonly resourceServer: ResourceServers;
}

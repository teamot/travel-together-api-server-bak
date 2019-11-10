import {
  Controller,
  Body,
  Get,
  Put,
  Headers,
  UseGuards,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { AddUserWithOauthDto } from '../dto';
import { UserService } from '../services/user';
import { AuthGuard } from '../guards/auth';
import { validationPipeOptions } from '../validations/validation-pipe-options';

@Controller('/users')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Get('/')
  public test() {
    return '<h1>hello</h1>';
  }

  @Get('/test')
  @UseGuards(AuthGuard)
  public testAuth(@Headers('Authorization') token: string) {
    return 'hello';
  }

  @Put('/')
  @UsePipes(new ValidationPipe(validationPipeOptions.addUserWithOAuth))
  public async addUserWithOAuth(
    @Body() addUserWithOauthDto: AddUserWithOauthDto
  ) {
    const token = await this.userService.updateOauthUserAndIssueToken(
      addUserWithOauthDto
    );

    return token;
  }
}

import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { MailService } from '../../shared/services/mail.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly mailService: MailService,
  ) {}

  @Post('create')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    const validationRequest = await this.userService.create(createUserDto);
    try {
      await this.mailService.sendConfirmationEmail(
        validationRequest.userEmail,
        validationRequest.code,
      );

      return { message: 'Usuario registrado exitosamente' };
    } catch (error) {
      const user = await this.userService.findUserByEmail(
        validationRequest.userEmail,
      );
      if (user) await this.userService.deleteUser(user);
      throw new BadRequestException(error);
    }
  }
}

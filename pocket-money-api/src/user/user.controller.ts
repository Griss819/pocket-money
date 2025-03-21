import {
    BadRequestException,
    Body,
    Controller,
    HttpCode,
    Post, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @HttpCode(200)
  @UsePipes(new ValidationPipe())
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      await this.userService.create(createUserDto);
      return { message: 'Usuario registrado exitosamente' };
    } catch (error) {
      // Si hay un error, lanza una excepción BadRequest
      throw new BadRequestException(error);
    }
  }
}

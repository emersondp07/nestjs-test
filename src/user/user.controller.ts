import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<any> {
    return await this.userService.create(createUserDto);
  }

  @Get('find-all')
  async findAll() {
    return await this.userService.findAll();
  }
}

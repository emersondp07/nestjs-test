import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }
  async create(createUserDto: CreateUserDto): Promise<any> {
    const user = await this.prismaService.user.create({
      data: createUserDto,
    });

    return user;
  }

  async findAll(): Promise<any> {
    const users = await this.prismaService.user.findMany();
    return users;
  }
}

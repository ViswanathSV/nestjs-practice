import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getUsers(
    @Query('limit', new DefaultValuePipe(100), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(limit);
    console.log(typeof limit);
    console.log(page);
    console.log(typeof page);
    return this.usersService.getUsers();
  }

  @Post()
  public createUser(@Body() userBody: CreateUserDTO) {
    return this.usersService.createUser(userBody);
  }
}

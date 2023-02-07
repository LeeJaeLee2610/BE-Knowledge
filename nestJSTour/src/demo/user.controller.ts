import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateUserDto } from "./create-user.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
      return this.userService.create(createUserDto)
    }
  
    @Get()
    findAll(): Promise<User[]> {
      return this.userService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<User> {
      return this.userService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.userService.remove(id);
    }
}
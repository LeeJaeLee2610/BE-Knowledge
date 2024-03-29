import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequestDto } from './create-user-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/demo')
  createUser(@Body() createUserRequestDto: CreateUserRequestDto) {
    this.appService.createUser(createUserRequestDto);
  }

  @Get('/analytics')
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}

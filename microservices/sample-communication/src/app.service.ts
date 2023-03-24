import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  hanleUserCreated(data: CreateUserEvent) {
    console.log('hanle - communication', data);
  }
}

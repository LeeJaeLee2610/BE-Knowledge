import { AuthService } from './auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }
  async validate(username: string, passposs: string): Promise<any> {
    // console.log(username, password);
    const user = await this.authService.validateUser(username, passposs);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}

import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}

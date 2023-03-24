import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport/dist';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { jwtConstants } from './auth/constants';
import { AuthService } from './auth/auth.service';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AppModule {}

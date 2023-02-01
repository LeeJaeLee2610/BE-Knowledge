import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./controllers/user.controller";
import { Post } from "./entities/post.entity";
import { Profile } from "./entities/profile.entity";
import { User } from "./entities/user.entity";
import { UsersService } from "./services/user.service";

@Module({
    controllers: [UserController],
    providers: [UsersService],
    imports: [TypeOrmModule.forFeature([User, Profile, Post])],
    exports: [TypeOrmModule],
})

export class UsersModule{}
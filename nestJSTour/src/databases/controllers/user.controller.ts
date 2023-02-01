import { UsersService } from './../services/user.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserProfileDto } from '../dto/create-user-profile.dto';
import { CreateUserPostDto } from '../dto/create-user-post.dto';

@Controller('users')
export class UserController{
    constructor(private userService: UsersService){}
    
    @Get("/find-all")
    async getUsers(){
        const users = this.userService.getUsers();
        return "OK"
    }

    @Post('/create-user')
    createUser(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto)
    }

    @Put('/update-user/:id')
    async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto){
        await this.userService.updateUser(id, updateUserDto)
    }

    @Delete('/delete-user/:id')
    async deleteUser(@Param('id', ParseIntPipe) id: number){
        await this.userService.deleteUser(id);
    }

    @Post('create-user-profile/:id/profiles')
    createUserProfile(@Param('id', ParseIntPipe) id: number, @Body() createUserProfileDto: CreateUserProfileDto){
        return this.userService.createUserProfile(id, createUserProfileDto);
    }

    @Post(":id/posts")
    createUserPost(@Param('id', ParseIntPipe) id: number, @Body() createUserPostDto: CreateUserPostDto){
        return this.userService.createUserPost(id, createUserPostDto)
    }
}
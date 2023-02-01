import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';
import { Profile } from '../entities/profile.entity';
import { User } from '../entities/user.entity';
import { CreateUserParams, CreateUserPostParams, CreateUserProfileParams, UpdateUserParams } from '../utils/types.util';
@Injectable()
export class UsersService{
    constructor(@InjectRepository(User) private usersRepository: Repository<User>, 
    @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    @InjectRepository(Post) private postRepository: Repository<Post>){}

    getUsers(){
        return "Hello All";
    }

    createUser(userDetails: CreateUserParams){
        const newUser = this.usersRepository.create({...userDetails, createdAt: new Date()})
        return this.usersRepository.save(newUser)
    }

    updateUser(id: number, updateDetails: UpdateUserParams){
        return this.usersRepository.update({id}, {...updateDetails, createdAt: new Date()})
    }

    deleteUser(id: number){
        return this.usersRepository.delete({id});
    }

    async createUserProfile(id: number, createUserProfileDetails: CreateUserProfileParams){
        const user = await this.usersRepository.findOneBy({id});
        if(!user){
            throw new HttpException("No", HttpStatus.BAD_REQUEST)
        }
        const newProfile = this.profileRepository.create(createUserProfileDetails);
        const savedProfile = await this.profileRepository.save(newProfile);
        user.profile = savedProfile;
        return this.usersRepository.save(user);
    }

    async createUserPost(id: number, createUserPostDetails: CreateUserPostParams){
        const user = await this.usersRepository.findOneBy({id});
        if(!user){
            throw new HttpException("No", HttpStatus.BAD_REQUEST)
        }
        const newPost = this.postRepository.create({...createUserPostDetails, user});
        return this.postRepository.save(newPost)
    }
}
import { HttpException, HttpStatus } from '@nestjs/common';
export class ForbiddenException extends HttpException{
    constructor(){
        console.log(HttpStatus.FORBIDDEN)
        super('Forbidden', HttpStatus.FORBIDDEN)
    }
}
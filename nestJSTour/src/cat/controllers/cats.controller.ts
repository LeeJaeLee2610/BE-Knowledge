import { LoggingInterceptor } from './../../common/interceptors/logging.interceptor';
import { ValidationPipe } from './../../common/pipes/validation.pipe';
import { HttpExceptionFilter } from './../../common/filters/http-exception.filter';
import { CatsService } from '../services/cats.service';
import { Body, Controller, Get, Param, Post, Req, Res, UseFilters, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from 'src/cat/dto/create-cat.dto';
import { ForbiddenException } from '../../common/exceptions/forbidden.exception';
import { HttpStatus } from '@nestjs/common/enums';

// Là nơi nhận request của client và trả về response cho client, Nơi hướng sub router
// Status code, Headers, Rediction(Chuyển đường dẫn đến mà ko truyền dữ liệu)

@Controller('/cats')
export class CatsController{
    constructor(private catsService: CatsService){}

    @Get("/do-get")
    @UseInterceptors(LoggingInterceptor)
    doGet(@Req() req: Request): string {
        console.log("Sau khi use")
        return "Ui Doi Oi";
    }

    @Post("/do-post")
    doPost(@Req() req: Request, @Res() res: Response): any {
        res.status(200).json(req.body);
    }

    @Get("/find-all")
    async findAll(){
        try {
            this.catsService.findAll()
        } catch (error) {
            // exception
            // throw new HttpException({
            //     status: HttpStatus.FORBIDDEN,
            //     error: "Forbidden"
            // }, HttpStatus.FORBIDDEN, {
            //     cause: error
            // })
            throw new ForbiddenException();
        }
    }

    @Post('/post-cat')
    async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto){
        this.catsService.create(createCatDto);
    }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    async create1(@Body() createCatDto: CreateCatDto){
        throw new ForbiddenException();
    }

    // Binding pipes
    // async findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number){
    //     return this.catsService.findOne(id);
    // }
}
import { ParseIntPipe } from './../../common/pipes/parse-int.pipe';
import { LoggingInterceptor } from './../../common/interceptors/logging.interceptor';
import { ValidationPipe } from './../../common/pipes/validation.pipe';
import { HttpExceptionFilter } from './../../common/filters/http-exception.filter';
import { CatsService } from '../services/cats.service';
import { Body, Controller, Get, Param, Post, Req, Res, UseFilters, UseInterceptors, UsePipes } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from 'src/cat/dto/create-cat.dto';
import { ForbiddenException } from '../../common/exceptions/forbidden.exception';
import { Cat } from '../interfaces/cat.interface';

// Là nơi nhận request của client và trả về response cho client, Nơi hướng sub router
// Status code, Headers, Rediction(Chuyển đường dẫn đến mà ko truyền dữ liệu)

@Controller('/cats')
export class CatsController{
    constructor(private catsService: CatsService){}

    @Get("/do-get")
    @UseInterceptors(LoggingInterceptor)
    doGet(@Req() req: Request, @Res() res: Response) {
        console.log("Sau khi use")
        setTimeout(() => {
            res.status(200).send("Ok")
        }, 5000);
    }

    @Get("/:id")
    async demoPipes(@Param("id", new ParseIntPipe()) id, @Res() res: Response){
        console.log(this.catsService.demo());
        res.status(200).send({id: id})
    } 

    @Get()
    async findAll(): Promise<Cat[]> {
      return this.catsService.findAll();
    }

    @Post("/do-post")
    doPost(@Req() req: Request, @Res() res: Response): any {
        res.status(200).json(req.body);
    }

    @Post('/post-cat')
    async create(@Body(new ValidationPipe()) createCatDto: CreateCatDto){
        this.catsService.create(createCatDto);
    }

    // @Post()
    // @UseFilters(new HttpExceptionFilter())
    // async create1(@Body() createCatDto: CreateCatDto){
    //     throw new ForbiddenException();
    // }

    // Binding pipes
    // async findOne(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number){
    //     return this.catsService.findOne(id);
    // }
}
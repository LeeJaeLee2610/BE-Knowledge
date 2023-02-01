import { CatsService } from './../services/cats.service';
import { Controller, Get, Res, UseFilters } from "@nestjs/common";
import { Response } from 'express';
import { ForbiddenException } from 'src/common/exceptions/forbidden.exception';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';

@Controller("/demo")
export class DemoController{
    constructor(private catsService: CatsService){}

    @Get("/do-demo")
    @UseFilters(new HttpExceptionFilter())
    async doGetDemo(@Res() res: Response){
        try {
            // res.status(200).send("Ok")
            const tmp = 1/0
            res.status(200).send(tmp)
        } catch (error) {
            throw new ForbiddenException();
        }
    }
}
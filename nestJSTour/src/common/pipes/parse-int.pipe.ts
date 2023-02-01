import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string> {
    // Chuyển đổi id sang dạng number
    async transform(value: string, metadata: ArgumentMetadata){
        const val = parseInt(value);
        console.log(val)
        if(isNaN(val)){
            throw new BadRequestException('Validation failed')
        }
        return val;
    }
}   
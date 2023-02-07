import {
    Controller,
    Get,
    Res,
    StreamableFile,
    UseInterceptors,
  } from '@nestjs/common';
  import { ApiTags } from '@nestjs/swagger';
  import { DownloadService } from './download.service';
  import { Response } from 'express';
  import { LoggingInterceptor } from './logging.interceptor';
import { ApiFileResponse } from './api-file-response.decoartor';
  
  @UseInterceptors(LoggingInterceptor)
  @Controller('download')
  @ApiTags('download')
  export class DownloadController {
    constructor(private readonly downloadService: DownloadService) {}
  
    // @ApiResponse({
    //   schema: {
    //     type: 'string',
    //     format: 'binary'
    //   },
    //   status: HttpStatus.OK
    // })
    // @ApiProduces('image/png')
    // @Get('buffer')
    // buffer(@Res() response: Response) {
    //   const file = this.downloadService.imageBuffer();
    //   response.contentType('image/png');
    //   // response.attachment();
    //   response.send(file);
    // }
  
    @ApiFileResponse('image/png')
    @Get('buffer')
    buffer(@Res() response: Response) {
      const file = this.downloadService.imageBuffer();
      response.contentType('image/png');
      response.send(file);
    }
    
    @Get('stream')
    stream(@Res() response: Response) {
      const file = this.downloadService.imageStream();
      file.pipe(response);
    }
  
    @Get('streamable')
    streamable(@Res({ passthrough: true }) response: Response) {
      const file = this.downloadService.fileStream();
      // or
      // const file = this.downloadService.fileBuffer();
      return new StreamableFile(file); // 👈 supports Buffer and Stream
    }
  }
  
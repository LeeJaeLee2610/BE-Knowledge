import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
// import { HttpAdapterHost } from "@nestjs/core";

// @Catch()
// export class AllExceptionFilter implements ExceptionFilter {
//     constructor(private readonly httpAdapterHost: HttpAdapterHost){}
//     catch(exception: any, host: ArgumentsHost) {
//         const {httpAdapter} = this.httpAdapterHost;
//         const ctx = host.switchToHttp();
//         const httpStatus = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

//         const respBody = {
//             statusCode: httpStatus,
//             timestmap: new Date().toISOString(),
//             path: httpAdapter.getRequestUrl(ctx.getRequest())
//         };
//         httpAdapter.reply(ctx.getResponse(), respBody, httpStatus);
//     }    
// }

@Catch()
export class AllExceptionFilter extends BaseExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void {
        super.catch(exception, host);
    }
}
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common"
import { Response, Request } from "express"


export class HttpFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const request = ctx.getRequest<Request>()
        const response = ctx.getResponse<Response>()
        response.json({
            success: false,
            time: new Date(),
            error: exception,
            path: request.url,
        })
    }
}
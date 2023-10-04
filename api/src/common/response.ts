import { Injectable, NestInterceptor, CallHandler } from "@nestjs/common"
import { map } from "rxjs/operators"
import { Observable } from "rxjs"

interface Data<T> {
    data: T
}

@Injectable()
export class Response<T> implements NestInterceptor {
    intercept(context, next: CallHandler): Observable<Data<T>> {
        return next.handle().pipe(map(data => {
            return {
                code: data.code ?? 200,
                success: data.success ?? true,
                message: data.message ?? "请求成功！",
                data: data.data,
                ...data.otherData
            }
        }))
    }
}
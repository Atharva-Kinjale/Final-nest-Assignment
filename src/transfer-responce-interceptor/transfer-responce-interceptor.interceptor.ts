import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransferResponceInterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data)=>{
      const len=data.length;
      // ({data})
      if (Array.isArray(data)) {
      return{
        length:len,
        data:data,
      }}
      return data;
    }));
  }
}

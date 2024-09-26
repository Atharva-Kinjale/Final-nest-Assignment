import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransferResponceInterceptorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

    // Get the HTTP request object
    const request = context.switchToHttp().getRequest();

    // Extract 'page' and 'limit' from query parameters
    const page = parseInt(request.query.page, 10) || 1;  // Default page = 1
    const limit = parseInt(request.query.limit, 10) || 10; // Default limit = 10

    console.log(`Page: ${page}, Limit: ${limit}`);
    return next.handle().pipe(map((data)=>{
      const len=data.length;
      // ({data})
      if (Array.isArray(data)) {
      return{
        length:len,
        page:page,
        limit:limit,
        data:data,

      }}
      return data;
    }));
  }
}

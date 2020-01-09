import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class AuthHeaderInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = 'Nitin';
        request = request.clone({
                setHeaders: {
                    Authorization: authToken
                }
            });
        return next.handle(request);
    }
}

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeaderInterceptor } from './auth-header.interceptors';

export const httpInterceptProviders = [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true }
];

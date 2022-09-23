/*Angular*/
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/*Application*/
import { JwtInterceptor } from './jwt.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
];

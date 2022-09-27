import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import { environment } from '@env/environment';
import {includes} from 'lodash';
import { LoaderService } from '@app/core/services/loader.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private loader: LoaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = localStorage.getItem('token');
    // if (token) {
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: `Bearer ${token}`
    //     }
    //   });
    // }

    this.loader.show();
    if (includes(request.url, environment.apiAuthUrl)) {
      console.log('intercepted: ', request.url);
      request = request.clone({
        setHeaders: {
          'FR-APP': environment.apiAuthKey
        }
      });
    }

    return next.handle(request).pipe(
      finalize(() => this.loader.hide())
    );
  }
}

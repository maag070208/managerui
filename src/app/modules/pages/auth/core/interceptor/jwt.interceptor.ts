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
    this.loader.show();

    // Authmanager
    if (includes(request.url, environment.apiAuthUrl)) {
      console.log('intercepted authmanger: ', request.url);
      request = request.clone({
        setHeaders: {
          'FR-APP': environment.apiAuthKey
        }
      });
    }

    // SAP
    if (includes(request.url, environment.apiSap)) {
      console.log('intercepted sap: ', request.url);
      request = request.clone({
        setHeaders: {
          Authorization: 'Basic U0FQX1BPOnA4MjVfOG8ySSMq',
          'Content-Type': 'application/json',
        }
      });
    }

    return next.handle(request).pipe(
      finalize(() => this.loader.hide())
    );
  }
}

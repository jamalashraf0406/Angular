import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Request is on its way");
    const modifiedReq = req.clone({
      headers: req.headers.append('new-header','value-header')
    });
    console.log(req.headers);
    console.log(modifiedReq.headers);
    return next.handle(modifiedReq)
  }

}

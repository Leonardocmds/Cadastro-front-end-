import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "./token.service";

@Injectable()
export class Interceptor implements HttpInterceptor{

  constructor(private tokenService: TokenService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const meuToken = this.tokenService.retornaToken();

    if(meuToken !== null){
      const authRequest =  req.clone({setHeaders: {'Authorization' : `Bearer ${meuToken}`}})
      return next.handle(authRequest);

    }

    return next.handle(req)

  }

}

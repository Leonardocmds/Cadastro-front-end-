import { UsuarioService } from './usuario/usuario.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  autenticar(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.http.post('http://localhost:8080/auth', {
      email: usuario,
      senha: senha,
    },
    {observe: 'response'}
    ).pipe(
      tap((res)=> {
        const authToken = res.headers.get('x-access-token') ?? '';
        this.usuarioService.salvaToken(authToken);

      })
    )
  }

}

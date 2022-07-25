import { map } from 'rxjs/operators';
import { tap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = 'http://localhost:8080/cadastro'

  constructor(private httpCliente: HttpClient) { }

  list(){
    return  this.httpCliente.get<Cliente[]>(this.API)
    .pipe(
      tap(clientes => console.log(clientes))
    );
  }


  listID(id: number): Observable<Cliente>{
    return this.httpCliente.get<Cliente>(`${this.API}/nome/${id}`)
    .pipe(
      map(clientes => clientes)
    );
  }

  atualizar(cliente: Cliente):Observable<Cliente>{
    return this.httpCliente.put<Cliente>(`${this.API}/edita/${cliente.id}`, cliente).pipe(
      tap(clientes => console.log(clientes))
    )
  }

  excluir(id: number):Observable<any>{
    return this.httpCliente.delete<any>(`${this.API}/exclui/${id}`).pipe(
      tap(clientes => console.log(clientes))
    )
  }


}

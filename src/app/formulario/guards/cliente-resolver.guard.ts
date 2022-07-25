import { ClientesService } from './../../table/clientes/clientes.service';
import { Cliente } from './../../table/model/cliente';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})


export class ClienteResolverGuard implements Resolve<Cliente> {

  constructor(private clienteService: ClientesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Cliente | Observable<Cliente> | Promise<Cliente> | Observable<any> {
   if(route.params && route.params['id']){
    return this.clienteService.listID(route.params['id'])
   }
   return of ({
    id:null,
    nome: null,
    cpf: null,
    email: null,
    endereco: null,
    dataNascimento: null
   });

  }

}

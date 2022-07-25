import { Cadastro } from './cadastro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }



  cadastrarCliente(cadastro: Cadastro){
    return this.http.post('http://localhost:8080/cadastro', cadastro);

  }

  verificaCPF(cpf: string){
    return this.http.get(`http://localhost:8080/cadastro/${cpf}`);
  }


}

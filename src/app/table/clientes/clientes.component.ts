import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from './clientes.service';

import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = []
  displayedColumns = ['id','nome', 'cpf', 'email', 'endereco', 'dataNascimento', 'atualizar', 'delete']



  constructor(private clientesService: ClientesService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.clientesService.list()

  }

  ngOnInit(): void {
    this.listarCliente();
  }

  deletar(cliente: Cliente): void{
   this.clientesService.excluir(cliente.id!).subscribe((xx) => {
    console.log(xx);
    this.listarCliente();
   })
  }

  listarCliente(){
    this.clientesService.list().subscribe(retorno => {
      this.clientes = retorno;
    })
  }

  onEdit(id: number){
    this.router.navigate(['/formulario/atualizar',id], {relativeTo: this.route})


  }
}

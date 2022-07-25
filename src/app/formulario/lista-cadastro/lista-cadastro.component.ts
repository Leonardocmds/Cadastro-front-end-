import { Validacoes } from './validacoes';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cadastro } from 'src/app/formulario/cadastro/cadastro';
import { CadastroService } from '../cadastro/cadastro.service';
import { CpfExisteService } from '../cadastro/cpf-existe.service';
import { ClientesService } from './../../table/clientes/clientes.service';
import { Cliente } from './../../table/model/cliente';



@Component({
  selector: 'app-lista-cadastro',
  templateUrl: './lista-cadastro.component.html',
  styleUrls: ['./lista-cadastro.component.css']
})
export class ListaCadastroComponent implements OnInit {

  cadastroForm!: FormGroup;

  cliente!: Cliente


  constructor(private formBuilder: FormBuilder, private clienteService: ClientesService, private cadastroService: CadastroService, private cpfExisteService: CpfExisteService,private datePipe: DatePipe, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const cliente = this.route.snapshot.data['cliente']

    // this.route.params.pipe(
    //   map((params : any) => params ['id']),
    //   switchMap(id => this.clienteService.listID(id))
    //   ).subscribe(cliente => this.updateForm(cliente))

    this.cadastroForm = this.formBuilder.group({
      id:[cliente.id],
      nome:[cliente.nome,[Validators.required,Validators.minLength(3)]],
      cpf:[cliente.cpf,[Validators.required,Validators.minLength(11), Validators.maxLength(11),Validacoes.isValidCpf()],[this.cpfExisteService.cpfJaExiste()]],
      email:[cliente.email,[Validators.required, Validators.email]],
      endereco:[cliente.endereco,[Validators.required]],
      dataNascimento:[cliente.dataNascimento,[Validators.required]],

    });
  }


  cadastrar(){
    if(this.cadastroForm.value.id){
      this.clienteService.atualizar(this.cadastroForm.value).subscribe((x) =>{

      });
    } else{
      const cadastro = this.cadastroForm.getRawValue() as Cadastro;
      this.cadastroService.cadastrarCliente(cadastro).subscribe((d)=> {
      },
        (e)=> {alert('Verifique os dados e tente novamente.')})
      }
      this.cadastroForm.reset();
    }


}

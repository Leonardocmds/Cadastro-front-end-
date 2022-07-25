import { Cliente } from './../table/model/cliente';
import { ClientesModule } from './../table/clientes/clientes.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { MensagemComponent } from './../componentes/mensagem/mensagem.component';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';



@NgModule({
  declarations: [
    ListaCadastroComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,
    FormularioRoutingModule,MensagemModule,FormsModule,CabecalhoModule,MatFormFieldModule,MatCardModule,MatToolbarModule,ClientesModule
  ]
})
export class FormularioModule { }

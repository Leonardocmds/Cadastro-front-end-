import { FormularioModule } from './../formulario/formulario.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableRoutingModule,FormularioModule
  ]
})
export class TableModule { }

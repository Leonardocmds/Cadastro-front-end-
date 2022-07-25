import { ClienteResolverGuard } from './../formulario/guards/cliente-resolver.guard';
import { FormularioModule } from './../formulario/formulario.module';
import { ListaCadastroComponent } from './../formulario/lista-cadastro/lista-cadastro.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '' ,component: ClientesComponent
  },
  {
    path: 'editar/:id' ,component: ListaCadastroComponent,
     resolve:{
      cliente: ClienteResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }

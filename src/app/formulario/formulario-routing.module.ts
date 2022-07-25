import { ClienteResolverGuard } from './guards/cliente-resolver.guard';
import { ListaCadastroComponent } from './lista-cadastro/lista-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[{
  path:'',
  component:ListaCadastroComponent,     resolve:{
    cliente: ClienteResolverGuard
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }

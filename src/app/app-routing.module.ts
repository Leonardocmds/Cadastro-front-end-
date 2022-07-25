import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home',
  loadChildren: ()=> import('./home/home.module').then((m) =>m.HomeModule)},
  {
    path:'formulario',
    loadChildren: () => import('./formulario/formulario.module').then((m) =>m.FormularioModule),
    canLoad:[AutenticacaoGuard]
  },
  {
    path:'clientes',
    loadChildren: () => import('./table/table.module').then((m) =>m.TableModule),
    canLoad:[AutenticacaoGuard]
  },
  {
    path:'formulario/atualizar/:id',
    loadChildren: () => import('./formulario/formulario.module').then((m) =>m.FormularioModule),
    canLoad:[AutenticacaoGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

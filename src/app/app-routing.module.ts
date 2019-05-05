import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasPesquisaComponent } from './reservas/reservas-pesquisa/reservas-pesquisa.component';
import { ReservaCadastroComponent } from './reservas/reserva-cadastro/reserva-cadastro.component';
import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: '', redirectTo: 'reservas', pathMatch: 'full' },
  { path: 'reservas', component: ReservasPesquisaComponent },
  { path: 'reservas/novo', component: ReservaCadastroComponent },
  { path: 'reservas/:id', component: ReservaCadastroComponent },
  { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

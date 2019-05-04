import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasPesquisaComponent } from './reservas/reservas-pesquisa/reservas-pesquisa.component';
import { ReservaCadastroComponent } from './reservas/reserva-cadastro/reserva-cadastro.component';

const routes: Routes = [
  { path: 'reservas', component: ReservasPesquisaComponent },
  { path: 'reservas/novo', component: ReservaCadastroComponent },
  { path: 'reservas/:id', component: ReservaCadastroComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
// import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

import { ReservasPesquisaComponent } from './reservas-pesquisa/reservas-pesquisa.component';
import { ReservasGridComponent } from './reservas-grid/reservas-grid.component';
import { ReservaService } from './reserva.service';
import { ReservaCadastroComponent } from './reserva-cadastro/reserva-cadastro.component';

@NgModule({
  declarations: [
    ReservasPesquisaComponent,
    ReservasGridComponent,
    ReservaCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,

    SelectButtonModule,
    DropdownModule,
    TriStateCheckboxModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
  ],
  providers: [ReservaService, ConfirmationService, MessageService],
  exports: [
    ReservasPesquisaComponent,
    ReservaCadastroComponent
  ]
})
export class ReservasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { TableModule } from 'primeng/components/table/table';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { SelectButtonModule } from 'primeng/components/selectbutton/selectbutton';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';

import { ReservasPesquisaComponent } from './reservas-pesquisa/reservas-pesquisa.component';
import { ReservasGridComponent } from './reservas-grid/reservas-grid.component';

@NgModule({
  declarations: [
    ReservasPesquisaComponent,
    ReservasGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SelectButtonModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
  ],
  exports: [
    ReservasPesquisaComponent
  ]
})
export class ReservasModule { }

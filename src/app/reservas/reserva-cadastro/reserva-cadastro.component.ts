import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/components/common/messageservice';

import { Reserva, Filial, Sala } from './../../core/models';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ReservaService } from './../reserva.service';

@Component({
  selector: 'app-reserva-cadastro',
  templateUrl: './reserva-cadastro.component.html',
  styleUrls: ['./reserva-cadastro.component.css']
})
export class ReservaCadastroComponent implements OnInit {
  filiais = [
    {label: 'Filial 1', value: 1},
    {label: 'Filial 2', value: 2}
  ];

  salas = [
    {label: 'Sala 1', value: 1},
    {label: 'Sala 2', value: 2}
  ];

  reserva = new Reserva();
  filial = new Filial();
  sala = new Sala();

  constructor(
    private reservaService: ReservaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
  ) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.reservaService.salvar(this.reserva)
     .then(reservaAdicionado => {
      this.messageService.add({ severity: 'success', detail: 'Reserva adicionado com sucesso!' });
     })
     .catch(erro => this.errorHandler.handle(erro));
  }

}

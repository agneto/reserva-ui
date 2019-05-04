import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const idReserva = this.route.snapshot.params.id;
    if (idReserva) {
      this.carregarReserva(idReserva);
    }
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarReserva(form);
    } else {
      this.adicionarReserva(form);
    }
  }

  adicionarReserva(form: FormControl) {
    this.reservaService.salvar(this.reserva)
     .then(reservaAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Reserva adicionado com sucesso!' });
        form.reset();
        this.reserva = new Reserva();
     })
     .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarReserva(form: FormControl) {
    this.reservaService.atualizar(this.reserva)
     .then(reservaAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Reserva Alterado com sucesso!' });
        form.reset();
        this.reserva = new Reserva();
     })
     .catch(erro => this.errorHandler.handle(erro));
  }

  carregarReserva(id: number) {
    this.reservaService.buscarPorCodigo(id)
      .then(reserva => {
        this.reserva = reserva;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  get editando() {
    return Boolean(this.reserva.id);
  }

}

import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

import { ReservaService, ReservaFiltro } from './../reserva.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Reserva } from './../../core/models';

@Component({
  selector: 'app-reservas-pesquisa',
  templateUrl: './reservas-pesquisa.component.html',
  styleUrls: ['./reservas-pesquisa.component.css']
})
export class ReservasPesquisaComponent implements OnInit {

  filtro = new ReservaFiltro();
  reservas = [];
  totalRegistros = 0;
  @ViewChild('tabela') grid;

  constructor(
    private reservaService: ReservaService,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,
    private confirmation: ConfirmationService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de Reservas');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.reservaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.reservas = resultado.reservas;
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(reserva: Reserva) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(reserva);
      },
      reject: () => {
        console.log('Test');
      }
    });
  }

  excluir(reserva: Reserva) {
    this.reservaService.excluir(reserva.id)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.messageService.add({ severity: 'success', detail: 'Reserva excluído com sucesso!' });
      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }
}

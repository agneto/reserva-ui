import { Component, OnInit, ViewChild } from '@angular/core';
import { ReservaService, ReservaFiltro } from './../reserva.service';

// import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
// import { LazyLoadEvent, ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { ErrorHandlerService } from './../../core/error-handler.service';

import * as moment from 'moment';

@Component({
  selector: 'app-reservas-pesquisa',
  templateUrl: './reservas-pesquisa.component.html',
  styleUrls: ['./reservas-pesquisa.component.css']
})
export class ReservasPesquisaComponent implements OnInit {

  filtro = new ReservaFiltro();
  reservas = [];

  reserva = { filial: {id: 2, nome: 'Filial 2'}, sala: {id: 2, nome: 'Sala 2'},
    inicio: moment(new Date(2019, 6, 9, 14, 0)).format('YYYY-MM-DD HH:mm'),
    fim: moment(new Date(2019, 6, 9, 15, 30)).format('YYYY-MM-DD HH:mm'),
    responsavel: 'Talita Mel', cafe: false, quantidadePessoa: 0,
    descricao: 'Teste back-end 3'};

  totalRegistros = 0;
  @ViewChild('tabela') grid;

  constructor(
    private reservaService: ReservaService,
    private errorHandlerService: ErrorHandlerService,
    private messageService: MessageService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit() {
    // this.adicionar();
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.reservaService.pesquisar(this.filtro)
      .then(resultado => {
        console.log(resultado);
        this.totalRegistros = resultado.total;
        this.reservas = resultado.reservas;

      })
      .catch(erro => this.errorHandlerService.handle(erro));
  }

  adicionar() {
    this.reservaService.adicionar(this.reserva)
    .then(() => this.pesquisar() )
    .catch(erro => console.log(erro.error.message));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(reserva: any) {
    console.log('confirmar exclusão');
    console.log(this.confirmation);
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

  excluir(reserva: any) {
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

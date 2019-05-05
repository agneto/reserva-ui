import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as moment from 'moment';
import { Reserva } from '../core/models';

export class ReservaFiltro {
  inicio: Date;
  fim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
   providedIn: 'root'
})
export class ReservaService {

  reservaUrl = 'http://localhost:8080/reservas/v1';

  constructor(private http: HttpClient) { }

  pesquisar(filtro: ReservaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.inicio) {
      params = params.append('dataInicial',
        moment(filtro.inicio).format('YYYY-MM-DD HH:mm:ss'));
    }

    if (filtro.fim) {
      params = params.append('dataFinal',
        moment(filtro.fim).format('YYYY-MM-DD HH:mm:ss'));
    }

    return this.http.get<any>(`${this.reservaUrl}?listarPaginada`, { params })
      .toPromise()
      .then(response => {
        const resultado = {
          reservas: response.content,
          total: response.totalElements
        };
        return resultado;
      }
    );
  }

  salvar(reserva: Reserva): Promise<Reserva> {
    return this.http.post<Reserva>(this.reservaUrl, reserva)
      .toPromise();
  }

  atualizar(reserva: Reserva): Promise<Reserva> {
    return this.http.put<Reserva>(`${this.reservaUrl}/${reserva.id}`, reserva)
      .toPromise()
      .then(response => {
        const reservaAlterado = response;

        this.converterStringsParaDatas([reservaAlterado]);

        return reservaAlterado;
      });
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.reservaUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }

  public buscarPorCodigo(id: number): Promise<Reserva> {
    return this.http.get<Reserva>(`${this.reservaUrl}/${id}`)
      .toPromise()
      .then(response => {
        const reserva = response;

        this.converterStringsParaDatas([reserva]);

        return reserva;
      });
  }

  private converterStringsParaDatas(reservas: Reserva[]) {
    for (const reserva of reservas) {
      reserva.inicio = moment(reserva.inicio, 'YYYY-MM-DD HH:mm').toDate();
      reserva.fim = moment(reserva.fim, 'YYYY-MM-DD HH:mm').toDate();
    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import * as moment from 'moment';

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

  adicionar(reserva: any): Promise<any> {
    return this.http.post<any>(`${this.reservaUrl}`, reserva)
      .toPromise()
      .then(response => response);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.reservaUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

}

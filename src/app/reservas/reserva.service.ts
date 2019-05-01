import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Observable, from as observableFromPromise } from 'rxjs';
// import * as moment from 'moment';
// import 'rxjs/add/operator/toPromise';

export class ReservaFiltro {
  inicio: Date;
  fim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
   providedIn: 'root'
})
// @Injectable()
export class ReservaService {

  reservaUrl = 'http://localhost:8080/reservas/v1';

  constructor(private http: HttpClient) { }

  pesquisar() { // : Promise<any>
    // return this.http.get(`${this.reservaUrl}?listarPaginada`).subscribe(reserva => console.log(reserva) );
    // return this.http.get(this.reservaUrl);
    return this.http.get(`${this.reservaUrl}?listarPaginada`).subscribe(reserva => console.log(reserva) );
      // .toPromise()
      // .then(response => {
       // console.log(response.json());
   // });
  }


}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reservas-grid',
  templateUrl: './reservas-grid.component.html',
  styleUrls: ['./reservas-grid.component.css']
})
export class ReservasGridComponent {

  @Input() reservas = [];

}

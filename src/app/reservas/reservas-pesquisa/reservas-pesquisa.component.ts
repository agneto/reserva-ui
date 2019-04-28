import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas-pesquisa',
  templateUrl: './reservas-pesquisa.component.html',
  styleUrls: ['./reservas-pesquisa.component.css']
})
export class ReservasPesquisaComponent implements OnInit {

  reservas = [
    { filial: {id: 1, nome: 'Filial 1'}, sala: {id: 1, nome: 'Sala 1'},
      inicio: new Date(2019, 5, 8, 8, 0), fim: new Date(2019, 5, 8, 9, 0),
      responsavel: 'Shayenne Andrade', cafe: false, quantidadePessoa: 0,
      descricao: 'Teste back-end'
    },
    { filial: {id: 1, nome: 'Filial 1'}, sala: {id: 1, nome: 'Sala 1'},
      inicio: new Date(2019, 5, 8, 14, 0), fim: new Date(2019, 5, 8, 15, 30),
      responsavel: 'Talita Mel', cafe: false, quantidadePessoa: 0,
      descricao: 'Teste back-end 2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

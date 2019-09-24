import { Component, OnInit } from '@angular/core';

import * as M from 'materialize-css';

 

@Component({
  selector: 'app-painel-administrativo',
  templateUrl: './painel-administrativo.component.html',
  styleUrls: ['./painel-administrativo.component.css']
})
export class PainelAdministrativoComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    //Modal
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);

    
  }

  
  // Variaveis
  nome = "Vinicius Landi";
  dataAtual = "30 de Agosto de 2019 - 11:30:00";
  proximaAula = "30/08/2019 - 11:50";

}

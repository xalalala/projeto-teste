import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';
//import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(

  ){}

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    });

  }

  //Variavel para mostrar ou nao o menu
  variavel = true;

  acaoEsconder(){
    this.variavel = false;
  }

  acaoMostrar(){
    this.variavel = true;  
  }

  deslogar(){
    // localStorage.removeItem("usuario_logado");
    console.log("deslogou! local "+localStorage.getItem("usuario_logado"));
    console.log("deslogou! sessao "+sessionStorage.getItem("usuario_logado"));
    localStorage.removeItem("usuario_logado");
    sessionStorage.removeItem("usuario_logado");
  }
  //Método para retornar o nome do Path após clicar na página.

  //Variavel Rota...
  //private route:Router;

  //this.route.events.subscribe(event => {
      
    // if (event instanceof NavigationEnd ) {
    //     console.log(event.url); // event.url has current url

    //   }
    // });
}

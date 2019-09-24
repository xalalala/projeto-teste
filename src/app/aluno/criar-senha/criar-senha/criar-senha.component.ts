import { Component, OnInit } from '@angular/core';

import { Aluno } from './../../aluno';

@Component({
  selector: 'app-criar-senha',
  templateUrl: './criar-senha.component.html',
  styleUrls: ['./criar-senha.component.css']
})
export class CriarSenhaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.aluno.nome = "Yuri Gabriel";
  }

  //Criando o objeto
  aluno = new Aluno();

}

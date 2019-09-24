import { Component, OnInit } from '@angular/core';

//Import de Rotar para pegar o parametro
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from './../aluno.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {

  //Variavel Inscriçao
  inscricao: Subscription;
  //Matriz para armazenar os dados oriundos do Banco
  alunos: any = {};


  //Variavel verificadora se Form mudou ou nao
  //Falta Implementar
  //private formMudou :boolean = false;


  //Construtor
  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    //Retornando o objeto que virá pela URL
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let cpf = params['cpf'];

        this.alunos = this.alunosService.getAluno(cpf);

        if (this.alunos === null) {
          this.alunos = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe;
  }



  // Verificando se o Formulario mudou ou  nao
  // Para saber se houve alteração

  //Falta Implementar

  /*onInput() {
    this.formMudou = true;
    console.log('mudou');
  }*/



}

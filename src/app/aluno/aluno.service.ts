import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    {cpf: 123, nome: 'Aluno 01', email: 'aluno01@email.com', situacao: 'Normal', descricao: 'bom aluno', senha:'senha123', urlImagem:'https://image.flaticon.com/icons/png/512/121/121693.png'},
    {cpf: 124, nome: 'Aluno 02', email: 'aluno02@email.com', situacao: 'Anormal', descricao: 'front end', senha:'senha123', urlImagem:'https://image.flaticon.com/icons/png/512/121/121693.png'},
    {cpf: 125, nome: 'Aluno 03', email: 'aluno03@email.com', situacao: 'Fodac', descricao: 'back end', senha:'senha123', urlImagem:'https://image.flaticon.com/icons/png/512/121/121693.png'},
    {cpf: 126, nome: 'Aluno 04', email: 'aluno04@email.com', situacao: 'Eoq', descricao: 'aluno', senha:'senha123', urlImagem:'http://entra21.com.br/arquivos/X5U1yOmV6r.jpg'}
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(cpf: number){
    for (let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if (aluno.cpf == cpf){
        return aluno;        
      }
    }
    return null;
  }

  constructor() { }

}
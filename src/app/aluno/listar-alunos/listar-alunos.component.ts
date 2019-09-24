import { Aluno } from './../../bean/aluno';
import { AlunoService } from './../../service/aluno.service';
import { Component, OnInit } from '@angular/core';

// Imports
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css']
})
export class ListarAlunosComponent implements OnInit {

  //Variavel Inscriçao
  inscricao: Subscription;
  //Matriz para armazenar os dados oriundos do Banco

  alunos: Aluno[];
  private aluno: Aluno = new Aluno();

  //Construtor
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunoService
  ) { }

  ngOnInit() {
    //Retornando o objeto que virá pela URL
    // this.alunos = this.alunosService.getAlunos();
    this.listarAluno();

  }

  listarAluno() {
    this.alunosService.listarAlunos().subscribe((aluno: Aluno[]) => {
      this.alunos = aluno;
    })
  }

  alterarAluno(email:string){
    sessionStorage.setItem("editar_aluno", email);
    this.router.navigate(['/','cadAlunoProfessor']);

  }

  deletarAluno(emailAluno: string) {
    if (confirm("Deseja excluir") == true) {
      this.alunosService.excluirAluno(emailAluno).subscribe((msg: string) => {
        console.log(msg);
        this.listarAluno();
      })
    }
  }

}

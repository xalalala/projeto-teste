import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Separar em outro module de Routing
import { LoginComponent } from './login/login.component';
import { InstitucionalComponent } from'./institucional/institucional.component';

// Cadastros
import { CadastroProfessorComponent } from './cadastro/cadastro-professor/cadastro-professor.component';
import { CadastroAlunoComponent } from './aluno/cadastro-aluno/cadastro-aluno.component';
import { CadastroAlunoNovoComponent } from './aluno/cadastro-aluno-novo/cadastro-aluno-novo.component';

// Listar Dados
import { ListarAlunosComponent } from './aluno/listar-alunos/listar-alunos.component';
import { AlunosDevedoresComponent } from './aluno/alunos-devedores/alunos-devedores.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

//Criar Senha do Aluno
import { CriarSenhaComponent } from './aluno/criar-senha/criar-senha/criar-senha.component';

import { HomeComponent } from './home/home.component';
import { PainelAdministrativoComponent} from './painel-administrativo/painel-administrativo.component';
import { ContatoComponent} from './contato/contato.component';

const routes: Routes = [
  // telas Normais
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'institucional', component: InstitucionalComponent},
  // Cadastro
  {path: 'cadProfessor', component: CadastroProfessorComponent},
  {path: 'cadAlunoProfessor', component: CadastroAlunoComponent },
  {path: 'cadAluno', component: CadastroAlunoNovoComponent },
  // Listar Dados
  {path: 'listarAlunos', component: ListarAlunosComponent },
  {path: 'alunosDevedores', component:  AlunosDevedoresComponent},
  {path: 'criarSenha', component: CriarSenhaComponent },
  {path: 'minhaConta', component: MinhaContaComponent },
  {path: 'painel', component: PainelAdministrativoComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Dividir em outro Modulo
import { FooterComponent } from './index/footer/footer.component';
import { HeaderComponent } from './index/header/header.component';
import { LoginComponent } from './login/login.component';
//Dividir em outro Modulo
import { CadastroProfessorComponent } from './cadastro/cadastro-professor/cadastro-professor.component';
import { CadastroAlunoComponent } from './aluno/cadastro-aluno/cadastro-aluno.component';
import { CadastroAlunoNovoComponent } from './aluno/cadastro-aluno-novo/cadastro-aluno-novo.component';
import { InstitucionalComponent } from './institucional/institucional.component';
//Dividir em outro Modulo 
import { ListarAlunosComponent } from './aluno/listar-alunos/listar-alunos.component';
import { PainelAdministrativoComponent } from './painel-administrativo/painel-administrativo.component';
import { AlunosDevedoresComponent } from './aluno/alunos-devedores/alunos-devedores.component';

// Masks
import { TextMaskModule } from 'angular2-text-mask';
import { CriarSenhaComponent } from './aluno/criar-senha/criar-senha/criar-senha.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';



import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CadastroProfessorComponent,
    CadastroAlunoComponent,
    CadastroAlunoNovoComponent,
    ListarAlunosComponent,
    PainelAdministrativoComponent,
    AlunosDevedoresComponent,
    InstitucionalComponent,
    CriarSenhaComponent,
    MinhaContaComponent,
    HomeComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

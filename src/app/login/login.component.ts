import { Aluno } from './../bean/aluno';
import { AlunoService } from './../service/aluno.service';
import { Component, OnInit } from '@angular/core';

import { ProfessorService } from './../service/professor.service';
import { Professor } from 'src/app/bean/professor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // Variavel email que recebe do input email
  email:string;
  // Variavel senha que recebe do input senha
  senha:string;
  // Variavel que verifica se foi clicado em lembrar de mim ou não
  lembrar_de_mim:boolean = false;

  constructor(
    // Instanciando as classes de servico
    private professor_servico:ProfessorService,
    private aluno_servico:AlunoService
  ) { }

  ngOnInit() {
  }

  // Funcao para tornar a variavel lembrar de mim conforme o checkbox está marcado
  lembrar_de_mim_funcao(){
    var chk_lembrar = <HTMLInputElement>document.getElementsByClassName("chk_lembrar")[0];
    if (chk_lembrar.checked) {
      this.lembrar_de_mim = true;
    }else{
      this.lembrar_de_mim = false;
    }
  }

  // Função para o delay
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }

  // Função que faz a verificação geral do login
  verificarLogin(){
    // Variavel recebendo o componente do checkbox lembrar de mim
    var chk_lembrar = <HTMLInputElement>document.getElementsByClassName("chk_lembrar")[0];
    // Desabilitando o checkbox enquanto faz as verificações
    chk_lembrar.disabled = true;
    // Verifica se já existe algum usuário logado
    if (localStorage.getItem("usuario_logado") != null || sessionStorage.getItem("usuario_logado") != null) {
      console.log("Já existe uma conta logada!");
      chk_lembrar.disabled = false;
      return;
    }
    // Puxa os dados do professor a partir do email oferecido
    this.professor_servico.obterDadosProfessor(this.email).subscribe((professor: Professor) => {
      // Se existir o usuário então verifica a senha
      if (professor != null) {
        // Verifica senha
        if (professor.senha_professor == this.senha) {
          // Caso ele queira que seja lembrado mesmo se fechar o navegador, então será armazenado no localStorage
          if (this.lembrar_de_mim == true) {
            localStorage.setItem("usuario_logado", professor.codigo);
          }else{
            // Caso ele não queira que seja lembrado então armazena no sessionStorage
            sessionStorage.setItem("usuario_logado", professor.codigo);
          }
          // Chama a função para carregar os parametros para o Storage
          this.carregando();
        }
      }else{
        // Puxa os dados do aluno a partir do email oferecido
        this.aluno_servico.obterDadosAluno(this.email).subscribe((aluno: Aluno) => {
          // Se existir o usuário então verifica a senha
          if (aluno != null) {
            // Verifica senha
            if (aluno.senha_aluno == this.senha) {
              // Caso ele queira que seja lembrado mesmo se fechar o navegador, então será armazenado no localStorage
              if (this.lembrar_de_mim == true) {
                localStorage.setItem("usuario_logado", aluno.codigo);
              }else{
                // Caso ele não queira que seja lembrado então armazena no sessionStorage
                sessionStorage.setItem("usuario_logado", aluno.codigo);
              }
              // Chama a função para carregar os parametros para o Storage
              this.carregando();
            }
          }else{
          // Caso não ache nenhum usuário
          console.log("Email e senha incorretos ou não cadastrados!");
          chk_lembrar.disabled = false;
          }
        })
      }
    })
  }

  // Função para carregar o session ou local storage
  async carregando(){
    var chk_lembrar = <HTMLInputElement>document.getElementsByClassName("chk_lembrar")[0];
    var progresso = <HTMLElement>document.getElementsByClassName("progress")[0];

    var usuario;

    //Mostra a barra de carregamento
    progresso.style.display = "inline-block";

    // Enquanto o local ou session storage não receber os parametros, ele fica carregando
    while (usuario == null) {
      await this.delay(500);
      if (this.lembrar_de_mim == true) {
        usuario = localStorage.getItem("usuario_logado");
        console.log("lembrou");
      }else{
        usuario = sessionStorage.getItem("usuario_logado");
        console.log("esqueceu");
      }

    }
    console.log(usuario);
    progresso.style.display = "none";
    chk_lembrar.disabled = false;
  }

}

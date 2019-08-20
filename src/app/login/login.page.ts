import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';

import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: Usuario = new Usuario();
  error: string = "";

  constructor(private router: Router, private authService: AngularFireAuth) { }

  ngOnInit() {
  }

  login(): void {

    if (this.validForm()) {
      
      this.authService.auth.signInWithEmailAndPassword(this.usuario.email,
        this.usuario.senha)
        .then((res) => {
          this.error="";
          this.router.navigate(['home']);
        }).catch((erro) => {
          this.error="Email ou senha inválidos";
          console.log(erro);
        });

    }

  }

  logout(): void {
    this.authService.auth.signOut();
    this.router.navigate(['login']);
  }

  redefinePwd(): void {
    if(this.usuario.email){
      this.error="";
      this.authService.auth.sendPasswordResetEmail(this.usuario.email)
      .then((res) => alert('Email enviado!'))
      .catch((err) => console.log(err));
    }else{
      this.error="Preencha o campo email!";
    }
  }

  createUser(): void{
    if(this.validForm()){

      this.authService.auth.createUserWithEmailAndPassword(this.usuario.email,
         this.usuario.senha)
         .then( (res) => {
            this.error="";
            this.router.navigate(['home']);
         }).catch((erro) => {
            this.error="Credenciais inválidas!";
            console.log(erro);
         });

    }
  }

  validForm(): Boolean{
    if (this.usuario.email && this.usuario.senha) {
      this.error = "";
      return true;
    } else {
      this.error = "Preencha todos os campos!";
      return false;
    }
  }

}

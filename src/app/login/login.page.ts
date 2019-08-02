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

  constructor(private router: Router, private authService: AngularFireAuth) { }

  ngOnInit() {
  }

  login(): void{
    this.authService.auth.signInWithEmailAndPassword(this.usuario.email,
       this.usuario.senha).then((res) => {
         this.router.navigate(['home']);
       }).catch( (erro) => console.log(erro) );
  }

  logout(): void{
    this.authService.auth.signOut();
    this.router.navigate(['login']);
  }

  redefinePwd(): void{
    this.authService.auth.sendPasswordResetEmail(this.usuario.email)
      .then( (res) => alert('Email enviado!'))
      .catch( (err) => console.log(err));
  }

}

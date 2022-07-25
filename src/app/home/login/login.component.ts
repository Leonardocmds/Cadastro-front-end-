import { UsuarioService } from './../../autenticacao/usuario/usuario.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/autenticacao/token.service';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email='';
  senha='';

  constructor(private authService: AutenticacaoService, private route: Router, private tokenService: TokenService, private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }



  login(){
    this.authService.autenticar(this.email,this.senha).subscribe(
      (data) => {
        this.route.navigate(['formulario'])
      },
      (e) =>{
        alert('Dados inválidos')
        console.log(e);
      }
      )
  }

}


import { LoginComponent } from 'src/app/home/login/login.component';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro';


constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private log: LoginComponent
    ) {}

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}

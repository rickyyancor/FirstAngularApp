import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-layout',
  template: `
    <h1>Menu principal Bienvenido: {{NombreUser}} </h1>
    <p>
      <a routerLink="home" >Crear Rutas</a> |
      <a routerLink="pacientes"> Pacientes </a> |
      <a routerLink="usuarios"> Usuarios </a> |
      <a routerLink="citas"> Citas </a> |

      <button (click)="logout()"> Logout</button>
    </p>

    <router-outlet></router-outlet>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {
  NombreUser='';

  constructor(private _authService: AuthService) {
    this.NombreUser=localStorage.getItem('user');
     }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
  }

}

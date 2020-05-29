import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { UsuariosService } from 'src/app/services/admin/usuarios.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public activeTab: string = "Overview";

  // usuario
  public usuario: any = {};
  public persona: any = {};
  public fotografia: any = {};

  private token: string;
  public url: string;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _auth: AuthService,
    private _serviceUsuario: UsuariosService
  ) {
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    const id_usuario = JSON.parse(localStorage.getItem('identity_user')).id_usuario;
    this.obtenerDatos(id_usuario);
  }
  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

  toggleTabs(tab: string) {
    if (tab) {
      this.activeTab = tab;
    }
  }
  obtenerDatos(id_usuario) {
    this._serviceUsuario.getUsuarioById(id_usuario, this.token)
    .then(responseUsuario => {
      this.usuario = responseUsuario.usuario;
      this.persona = responseUsuario.usuario.persona;
      this.fotografia = responseUsuario.usuario.persona.fotografia;
    })
    .catch(error => { console.log('error al obtener usuario', error); });
  }

}

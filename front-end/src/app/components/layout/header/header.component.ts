import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'src/app/services/theme.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/admin/usuarios.service';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // Properties
  @Input() showNotifMenu: boolean = false;
  @Input() showToggleMenu: boolean = false;
  @Input() darkClass: string = '';
  @Output() toggleSettingDropMenuEvent = new EventEmitter();
  @Output() toggleNotificationDropMenuEvent = new EventEmitter();

  public rol: string;

  public fotografia: any = {};
  public persona: any = {};

  private token: string;
  public url: string;

  private id_usuario;

  constructor(private config: NgbDropdownConfig,
    private themeService: ThemeService,
    private _auth: AuthService,
    private _router: Router,
    private _serviceUsuario: UsuariosService
    ) {
    config.placement = 'bottom-right';
    this.rol = localStorage.getItem('rol');
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.id_usuario = JSON.parse(localStorage.getItem('identity_user')).id_usuario;
    this.obtenerDatos(this.id_usuario);
  }

  ngOnInit() {
  }

  toggleSettingDropMenu() {
    this.toggleSettingDropMenuEvent.emit();
  }

  toggleNotificationDropMenu() {
    this.toggleNotificationDropMenuEvent.emit();
  }

  toggleSideMenu() {
    this.themeService.showHideMenu();
  }
  logout() {
    this._auth.logOut();
    this._router.navigate(['/authentication/login']);
  }

  obtenerDatos(id_usuario) {
    this._serviceUsuario.getUsuarioById(id_usuario, this.token)
    .then(responseUsuario => {
      this.fotografia = responseUsuario.usuario.persona.fotografia;
      this.persona = responseUsuario.usuario.persona;
    })
    .catch(error => { console.log('error al obtener usuario', error); });
  }

}

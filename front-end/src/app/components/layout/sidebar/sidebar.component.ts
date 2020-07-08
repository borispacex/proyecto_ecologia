import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from 'src/app/services/theme.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/admin/usuarios.service';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnDestroy, OnInit {

  @Input() sidebarVisible: boolean = true;
  @Input() navTab = 'menu';
  @Input() currentActiveMenu;
  @Input() currentActiveSubMenu;
  @Output() changeNavTabEvent = new EventEmitter();
  @Output() activeInactiveMenuEvent = new EventEmitter();
  public themeClass = 'theme-cyan';
  public darkClass = '';
  private ngUnsubscribe = new Subject();
  public rol: string;

  public fotografia: any = {};

  private token: string;
  public url: string;

  private id_usuario;

  constructor(
    private themeService: ThemeService,
    private _auth: AuthService,
    private _router: Router,
    private _serviceUsuario: UsuariosService
    ) {
    this.themeService.themeClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeClass => {
      this.themeClass = themeClass;
    });
    this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
      this.darkClass = darkClass;
    });
    this.rol = localStorage.getItem('rol');
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.id_usuario = JSON.parse(localStorage.getItem('identity_user')).id_usuario;
    this.obtenerDatos(this.id_usuario);
  }

  ngOnInit(): void {
    this.obtenerDatos(this.id_usuario);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  changeNavTab(tab: string) {
    this.navTab = tab;
  }

  obtenerDatos(id_usuario) {
    this._serviceUsuario.getUsuarioById(id_usuario, this.token)
    .then(responseUsuario => {
      this.fotografia = responseUsuario.usuario.persona.fotografia;
    })
    .catch(error => { console.log('error al obtener usuario', error); });
  }

  activeInactiveMenu(menuItem: string) {
    this.activeInactiveMenuEvent.emit({ item: menuItem });
  }

  changeTheme(theme: string) {
    this.themeService.themeChange(theme);
  }

  changeDarkMode(darkClass: string) {
    this.themeService.changeDarkMode(darkClass);
  }

  logout() {
    this._auth.logOut();
    this._router.navigate(['/authentication/login']);
  }
  
}

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

  public fotografia: any = {
    imagen: 'photo_default.png'
  };

  private token: string;
  public url: string;

  private id_persona;

  constructor(
    private themeService: ThemeService,
    private _auth: AuthService,
    private _router: Router,
    private _serviceUsuario: UsuariosService
    ) {
    this.rol = localStorage.getItem('rol');
    this.token = this._auth.getToken();
    this.url = GLOBAL.url;
    this.id_persona = JSON.parse(localStorage.getItem('identity_user')).id_persona;
    this.obtenerDatos();
  }

  ngOnInit(): void {
    // this.obtenerDatos();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  changeNavTab(tab: string) {
    this.navTab = tab;
  }

  obtenerDatos() {
    this._serviceUsuario.getPersonaById(this.id_persona, this.token)
    .then(response => {
      this.fotografia = response.persona.fotografia;
      this.themeClass = response.persona.color;
      this.darkClass = response.persona.tema;
      this.themeService.themeClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeClass => {
        this.themeClass = themeClass;
      });
      this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
        this.darkClass = darkClass;
      });
      this.themeService.themeChange(this.themeClass);    // actualiza color
      this.themeService.changeDarkMode(this.darkClass);  // actualiza tema
    }).catch(error => {
      console.log('Error al obtener persona por id', error);
    });
  }

  activeInactiveMenu(menuItem: string) {
    this.activeInactiveMenuEvent.emit({ item: menuItem });
  }

  // cambiar color
  changeTheme(theme: string) {
    this.themeService.themeChange(theme);
    this._serviceUsuario.updatePersona(this.id_persona, { color: theme }, this.token)
    .then(response => {
      // console.log('response', response);
    }).catch(error => { console.log('Error al actualizar color', error); });
  }

  // cambiar tema
  changeDarkMode(darkClass: string) {
    this.themeService.changeDarkMode(darkClass);
    this._serviceUsuario.updatePersona(this.id_persona, { tema: darkClass }, this.token)
    .then(response => {
      // console.log('response', response);
    }).catch(error => { console.log('Error al actualizar tema', error); });
  }

  logout() {
    this._auth.logOut();
    this._router.navigate(['/authentication/login']);
  }  
}

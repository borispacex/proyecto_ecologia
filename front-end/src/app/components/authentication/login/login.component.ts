import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ThemeService } from 'src/app/services/theme.service';
import { UsuariosService } from 'src/app/services/admin/usuarios.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: any = {};
  public roles: any = [];
  public cadRoles: any = {};

  // modal
  @ViewChild('btnClose') btnClose: ElementRef;
  @ViewChild('btnOpen') btnOpen: ElementRef;

  public showPassword: boolean = false;

  constructor(
    private sidebarService: SidebarService,
    private _serviceLogin: LoginService,
    private _router: Router,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.roles = [];
  }

  login() {
    if (!this.usuario.usuario && !this.usuario.password) {
      this.toastr.error('Debe llenar los campos.', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
    } else if (this.usuario.usuario && !this.usuario.password) {
      this.toastr.error('Debe llenar el campo de contraseña.', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
    } else if (!this.usuario.usuario && this.usuario.password) {
      this.toastr.error('Debe llenar el campo de usuario.', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
    } else {
      this._serviceLogin.login(this.usuario)
      .then(response => {
        this._serviceLogin.login(this.usuario, true)
          .then(responseToken => {
            this._serviceLogin.getRolByUsuario(response.usuario.id_usuario)
              .then(responseRol => {
                this.roles = responseRol.adm_usuario_roles;
                localStorage.setItem('identity_user', JSON.stringify(response.usuario));
                localStorage.setItem('token', responseToken.token);
                localStorage.setItem('admRoles', JSON.stringify(this.roles));
                if (this.roles.length === 1) {
                  switch (this.roles[0].id_rol) {
                    case 1:
                      this.sidebarService.setTrue();
                      this._router.navigate(['/admin']);
                      localStorage.setItem('rol', 'administrador');
                      break;
                    case 2:
                      this.sidebarService.setTrue();
                      this._router.navigate(['/director']);
                      localStorage.setItem('rol', 'director');
                      break;
                    case 3:
                      this.sidebarService.setTrue();
                      this._router.navigate(['/investigador']);
                      localStorage.setItem('rol', 'investigador');
                      break;
                    default:
                      console.log('Error, no existe el rol definido');
                      break;
                  }
                } else {
                  this.btnOpen.nativeElement.click();
                  this.usuario = {};
                }
              });
          })
          .catch(error => {
            console.log('Error al ingresar al sistema', error);
            this.toastr.error('Error al ingresar con el usuario.', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          });
      })
      .catch(error => {
        console.log('Usuario incorrecto', error); // error usuario incorrecto
        this.toastr.error('Error usuario incorrecto.', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
      });
    }
  }
  ingresar(id: number) {
    switch (id) {
      case 1:
        this.sidebarService.setTrue();
        this._router.navigate(['/admin']);
        localStorage.setItem('rol', 'administrador');
        break;
      case 2:
        this.sidebarService.setTrue();
        this._router.navigate(['/director']);
        localStorage.setItem('rol', 'director');
        break;
      case 3:
        this.sidebarService.setTrue();
        this._router.navigate(['/investigador']);
        localStorage.setItem('rol', 'investigador');
        break;
      default:
        console.log('Error, no existe el rol definido');
        break;
    }
    this.btnClose.nativeElement.click();
  }
  // metodo para obtener id_rol
  id_rolByUsuario(id: number) {
    this._serviceLogin.getRolByUsuario(id)
      .then(response => {
        // console.log(response);
      });
  }
  public onPasswordToggle(): void {
    this.showPassword = !this.showPassword;
  }

}

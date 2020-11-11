import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from 'src/app/services/auth/forgot-password.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-password-by-email',
  templateUrl: './update-password-by-email.component.html',
  styleUrls: ['./update-password-by-email.component.css']
})
export class UpdatePasswordByEmailComponent implements OnInit {

  public token: string;
  public persona: any = {};
  public usuario: any = {
    persona : {
      paterno: '',
      materno: '',
      nombres: '',
      correo: '',
      fotografia: {
        imagen: ''
      }
    }
  };
  public password1: string;
  public password2: string;

  public url: string;

  constructor(
    private _serviceForgotPassword: ForgotPasswordService,
    private _router: Router,
    private _rote: ActivatedRoute,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.getTokenByEmail();
    this.url = GLOBAL.url;
  }

  actualizar() {
    if (this.password1 === this.password2) {
      this.usuario.password = this.password1;
      this._serviceForgotPassword.updatePasswordByEmail(this.usuario)
        .then(response => {
          // console.log('contraseña actualizada', response);
          this.toastr.success('Contraseña actualizada', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
          this._router.navigate(['/authentication/login']);
        }).catch(error => {
          console.log('Error al actualizar password', error);
          this.toastr.error('Error al actualizar contraseña', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    } else {
      // console.log('contraseñas no coinciden');
      this.toastr.error('Las contraseñas no coinciden', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
    }
  }

  getTokenByEmail() {
    this._rote.paramMap.subscribe(params => {
      this.token = params['params'].token;  // token hallado del enlace recibido por el email
      this._serviceForgotPassword.resetPassword(this.token)
        .then(usuario => {
          this.usuario = usuario.usuario; // ingresamos por medio del token y recibimos todo usuario
        })
        .catch(error => {
          // console.log('Fallo el token es incorrecto', error);
          this._router.navigate(['/authentication/page-401']);
          this.toastr.error('Error con el token es incorrecto', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        });
    });
  }

}

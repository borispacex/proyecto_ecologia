import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from 'src/app/services/auth/forgot-password.service';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/services/global';

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

  constructor(private _serviceForgotPassword: ForgotPasswordService, private _router: Router, private _rote: ActivatedRoute) { }

  ngOnInit() {
    this.getTokenByEmail();
    this.url = GLOBAL.url;
  }

  actualizar() {
    if (this.password1 === this.password2) {
      this.usuario.password = this.password1;
      this._serviceForgotPassword.updatePasswordByEmail(this.usuario)
        .then(response => {
          console.log('contraseña actualizada', response);
          this._router.navigate(['/authentication/login']);
        }).catch(error => {
          console.log('error', error);
        });
    } else {
      console.log('contraseñas no coinciden');
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
          console.log('Fallo el token es incorrecto', error);
          this._router.navigate(['/authentication/page-401']);
        });
    });
  }

}

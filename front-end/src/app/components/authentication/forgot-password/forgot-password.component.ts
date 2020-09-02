import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from 'src/app/services/auth/forgot-password.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public persona: any = {};

  constructor(private _serviceForgotPassword: ForgotPasswordService, private _router: Router, private toastr: ToastrService) { }

  ngOnInit() {
  }

  recuperar() {
    if (this.persona) {
      this.toastr.error('Debe llenar el campo de Correo electronico.', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
    } else {
      this._serviceForgotPassword.forgotPassword(this.persona)
      .then(response => {
        // satisfactorio se envio al correo, tarda un poco
        this.toastr.success('Enviado, por favor revise su correo.', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        console.log('correo de recuperacion enviado', response);
        this._router.navigate(['/authentication/login']);
      }).catch(error => {
        this.toastr.error('Error correo no existe', undefined, { closeButton: true, positionClass: 'toast-bottom-right' });
        this._router.navigate(['/authentication/login']);
        console.log('error', error);
      });
    }
  }

}

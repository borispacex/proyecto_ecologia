import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { Http, RequestOptions, Headers } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotografiasService {

  private url: string;
  private imagen: BehaviorSubject<string> = new BehaviorSubject<string>('photo_default.png');

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }

  public getImagen(): Observable<string> {
    return this.imagen.asObservable();
  }

  public setImagen(value: string): void {
      this.imagen.next(value);
  }

  getFotografiasTrue(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'fotografias', options).toPromise()
      .then(res => res.json());
  }
  getFotografiasFalse(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'fotografiasFalse', options).toPromise()
      .then(res => res.json());
  }
  getFotografiasAdmin(token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'fotografias-admin', options).toPromise()
      .then(res => res.json());
  }
  // guardar una fotografia
  save(fotografia: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url + 'fotografia', fotografia, options).toPromise()
      .then(res => res.json());
  }
  // actualizar fotografia
  update(id: number, fotografia: any, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this.url + 'fotografia/' + id, fotografia, options).toPromise()
      .then(res => res.json());
  }
  //mostrar fotografia por ID
  getFotografiasById(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'fotografia/' + id, options).toPromise()
      .then(res => res.json());
  }
  // obtener rol
  getRolByUsuario(id: number, token: string) {
    let headers = new Headers({
      'Authorization': token
    });
    let options = new RequestOptions({ headers: headers });
    return this._http.get(this.url + 'getByUsuario/' + id, options).toPromise()
    .then (res => res.json());
  }
}

import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotografiasService {

  private url: string;
  private imagen: BehaviorSubject<string> = new BehaviorSubject<string>('photo_default.png');

  constructor(private _httpClient: HttpClient) {
    this.url = GLOBAL.url;
  }

  public getImagen(): Observable<string> {
    return this.imagen.asObservable();
  }

  public setImagen(value: string): void {
      this.imagen.next(value);
  }

  getFotografiasTrue(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'fotografias', options).toPromise()
    .then(res => res);
  }
  getFotografiasFalse(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'fotografiasFalse', options).toPromise()
    .then(res => res);
  }
  getFotografiasAdmin(token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'fotografias-admin', options).toPromise()
    .then(res => res);
  }
  // guardar una fotografia
  save(fotografia: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.post<any>(this.url + 'fotografia', fotografia, options).toPromise()
    .then(res => res);
  }
  // actualizar fotografia
  update(id_fotografia: number, fotografia: any, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.put<any>(this.url + 'fotografia/' + id_fotografia, fotografia, options).toPromise()
    .then(res => res);
  }
  //mostrar fotografia por ID
  getFotografiasById(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'fotografia/' + id, options).toPromise()
    .then(res => res);
  }
  // obtener rol
  getRolByUsuario(id: number, token: string) {
    let reqHeader = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    const options = { headers: reqHeader };
    return this._httpClient.get<any>(this.url + 'getByUsuario/' + id, options).toPromise()
    .then(res => res);
  }
}

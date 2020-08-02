import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UploadArchivoService {

  // BehaviorSubject se usa para obtener el valor de la barra de progreso cuando cambia
  private _progress: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() {
  }

  // Devuelve el estado de progreso como observable
  get progress(): Observable<number> {
    return this._progress.asObservable();
  }

  uploadArchivo(url: string, file: File, token: string){
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      formData.append('documento', file, file.name);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(JSON.parse(xhr.response));
          }
        }
      };

      // Emitir el progreso actual en porcentaje
      xhr.upload.onprogress = (event: ProgressEvent) => {
        this._progress.next(Math.round((event.loaded / event.total) * 100));
      };

      xhr.open('POST', url, true);
      // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);


    });
  }
}

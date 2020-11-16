import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class UploadArchivoService {

  private progress$: Observable<number>;
  private progress: number = 0;
  private progressObserver: any;

  constructor() {
    this.progress$ = new Observable(observer => {
      this.progressObserver = observer;
    });
  }

  public getObserver(): Observable<number> {
    return this.progress$;
  }

  uploadArchivo(url: string, file: File, token: string){
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      formData.append('documento', file, file.name);

      xhr.upload.onprogress = (event: ProgressEvent) => {
        console.log('upload', Math.round((event.loaded / event.total) * 100));
        this.progress = Math.round((event.loaded / event.total) * 100);
        this.progressObserver.next(this.progress);
      };

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(JSON.parse(xhr.response));
          }
        }
      };

      xhr.open('POST', url, true);
      // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send(formData);


    });
  }
}

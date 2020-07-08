// import { Component } from 'angular2/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private progress$: Observable<number>;
  private progress: number = 0;
  private progressObserver: any;

  constructor() {
    this.progress$ = new Observable(observer => {
      this.progressObserver = observer;
    });
  }

  private static setUploadUpdateInterval(interval: number): void {
    setInterval(() => {}, interval);
  }

  getObserver(): Observable<number> {
    return this.progress$;
  }

  upload(url: string, file: File, token: string): Promise<any> {
    return new Promise((resolve, reject) => {
      var formData: FormData = new FormData();
      var xhr: XMLHttpRequest = new XMLHttpRequest();
      // for (let i = 0; i < files.length; i++) {
      //     formData.append('documento', files[i], files[i].name);
      // }
      formData.append('documento', file, file.name);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            // reject(xhr.response);
            reject(JSON.parse(xhr.response));
          }
        }
      };

      FileUploadService.setUploadUpdateInterval(500);

      xhr.upload.onprogress = (event) => {
        this.progress = Math.round(event.loaded / event.total * 100);
        this.progressObserver.next(this.progress);
      };

      xhr.open('POST', url, true);
      // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.setRequestHeader('Authorization', token);
      // xhr.withCredentials = true;
      xhr.send(formData);
    });
  }

}

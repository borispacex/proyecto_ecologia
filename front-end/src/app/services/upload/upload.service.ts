import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    private progress$: Observable<number>;
    private progress: number = 0;
    private progressObserver: any;

    constructor(private http: HttpClient) {
        this.progress$ = new Observable(observer => {
            this.progressObserver = observer;
        });
    }

    public getObserver(): Observable<number> {
        return this.progress$;
    }

    upload(url: string, files: Array<File>, token: string) {
        return new Promise((resolve, reject): void => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            // for (let i = 0; i < files.length; i++) {
            //     formData.append('foto', files[i], files[i].name);
            // }
            formData.append('foto', files[0], files[0].name);

            xhr.upload.onprogress = (event: ProgressEvent) => {
                console.log('upload', Math.round((event.loaded / event.total) * 100));
                this.progress = Math.round((event.loaded / event.total) * 100);
                this.progressObserver.next(this.progress);
            };

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(JSON.parse(xhr.response));
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', `Bearer ${token}`);
            xhr.send(formData);
        });
    }
}

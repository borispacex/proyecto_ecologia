import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UploadArchivoService {

    constructor() { }

    uploadArchivo(url: string, file: File, token: string) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();

            formData.append('documento', file, file.name);

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(JSON.parse(xhr.response));
                    }
                }
            };
        });
    }
}

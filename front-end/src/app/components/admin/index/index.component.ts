import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders, HttpRequest, HttpEventType, HttpEvent } from '@angular/common/http';

import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public sidebarVisible: boolean = true;
  // public isResizing: boolean = false;

  // variable para subir archivos
  private url: string;
  progress = 0;
  selectedFiles = [];

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    private http: HttpClient
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    // setTimeout( () => {
    //   this.showToastr();
    // }, 1000);
  }

  showToastr() {
    this.toastr.info('Hola, bienvenido administrador.', undefined, { closeButton: true, positionClass: 'toast-top-right' });
  }

  toggleFullWidth() {
    // this.isResizing = true;
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    let that = this;
    setTimeout(() => {
      // that.isResizing = false;
      that.cdr.detectChanges();
    }, 400);
  }

  // funciones para subir los archivos
  selectFile(event) {
    this.selectedFiles = [];
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      let obj = {
        fileName: file.name,
        selectedFile: file,
        fileId: `${file.name}-${file.lastModified}`,
        uploadCompleted: false
      };
      this.selectedFiles[0] = obj;
      console.log('... file[' + 0 + '].name = ' + file.name);
      this.selectedFiles.forEach(f => this.getFileUploadStatus(f));
    }
  }

  selectMultipleFile(event){
    this.selectedFiles = [];
    if (event.target.files.length > 0) {
      for (var i = 0; i < event.target.files.length; i++) {
        let file = event.target.files[i];
        let obj = {
          fileName: file.name,
          selectedFile: file,
          fileId: `${file.name}-${file.lastModified}`,
          uploadCompleted: false
        };
        this.selectedFiles.push(obj);
        console.log('... file[' + i + '].name = ' + file.name);
      }
      this.selectedFiles.forEach(f => this.getFileUploadStatus(f));
    }
  }

  // funciones para subir los archivos
  dropHandler(ev) {
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (var i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          let file = ev.dataTransfer.items[i].getAsFile();
          let obj = {
            fileName: file.name,
            selectedFile: file,
            fileId: `${file.name}-${file.lastModified}`,
            uploadCompleted: false
          };
          this.selectedFiles.push(obj);
          console.log('... file[' + i + '].name = ' + file.name);
        }
      }
      this.selectedFiles.forEach(file => this.getFileUploadStatus(file));
    } else {
      for (var i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    }
  }

  dragOverHandler(ev) {
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    ev.stopPropagation();
  }



  getFileUploadStatus(file) {
    // fetch the file status on upload
    let headers = new HttpHeaders({
      'size': file.selectedFile.size.toString(),
      'x-file-id': file.fileId,
      'name': file.fileName
    });

    this.http
      .get('http://localhost:8012/api/status', { headers: headers }).subscribe(
        (res: any) => {
          file.uploadedBytes = res.uploaded;
          file.uploadedPercent = Math.round(100 * file.uploadedBytes / file.selectedFile.size);
          if (file.uploadedPercent >= 100) {
            file.uploadCompleted = true;
          }
        }, err => {
          console.log(err);
        }
      );
  }

  uploadFiles() {
    this.selectedFiles.forEach(file => {
      if (file.uploadedPercent < 100) {
        this.resumeUpload(file);
      }
    });
  }

  resumeUpload(file) {
    //make upload call and update the file percentage
    const headers2 = new HttpHeaders({
      'size': file.selectedFile.size.toString(),
      'x-file-id': file.fileId,
      'x-start-byte': file.uploadedBytes.toString(),
      'name': file.fileName
    });
    console.log(file.uploadedBytes, file.selectedFile.size, file.selectedFile.slice(file.uploadedBytes).size);

    // tslint:disable-next-line:max-line-length
    const req = new HttpRequest('POST', 'http://localhost:8012/api/upload', file.selectedFile.slice(file.uploadedBytes, file.selectedFile.size + 1), {
      headers: headers2,
      reportProgress: true
    });

    this.http.request(req).subscribe(
      (res: any) => {
        if (res.type === HttpEventType.UploadProgress) {
          file.uploadedPercent = Math.round(100 * (file.uploadedBytes + res.loaded) / res.total);
          console.log(file.uploadedPercent);
          if (file.uploadedPercent >= 100) {
            file.uploadCompleted = true;
          }
        } else {
          if (file.uploadedPercent >= 100) {
            file.uploadCompleted = true;
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteFile(file) {
    this.selectedFiles.splice(this.selectedFiles.indexOf(file), 1);
  }


}

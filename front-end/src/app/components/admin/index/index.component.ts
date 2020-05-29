import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public sidebarVisible: boolean = true;
  // public isResizing: boolean = false;

  constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private toastr: ToastrService) { }

  ngOnInit() {
    setTimeout( () => {
      this.showToastr();
    }, 1000);
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

}

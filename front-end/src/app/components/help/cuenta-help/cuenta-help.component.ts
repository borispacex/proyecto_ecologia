import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-cuenta-help',
  templateUrl: './cuenta-help.component.html',
  styleUrls: ['./cuenta-help.component.css']
})
export class CuentaHelpComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public collepse: string;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._route.params.forEach((params: Params) => {
      console.log(params);
      switch (params.tipo) {
        case '1':
          this.collepse = 'collapseOne';
          break;
        case '2':
          this.collepse = 'collapseOne1';
          break;
        case '3':
          this.collepse = 'collapseOne2';
          break;
        default:
          break;
      }
    });
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }
  toggleCollepseGeneral(collepse: string) {
    if (this.collepse !== collepse) {
      this.collepse = collepse;
    } else {
      this.collepse = '';
    }
  }

}

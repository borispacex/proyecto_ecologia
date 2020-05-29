import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-admin-help',
  templateUrl: './admin-help.component.html',
  styleUrls: ['./admin-help.component.css'],
})
export class AdminHelpComponent implements OnInit {
  public sidebarVisible: boolean = true;
  public posts: Array<any> = new Array<any>();

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef
  ) {
    this.posts = [
      {
        class: 'green',
        date: '20-04-2018 - Today',
        header: 'Como administrar cuentas',
        message:
          "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.",
      },
      {
        class: 'blue',
        date: '19-04-2018 - Yesterday',
        header: 'Como crear proyectos de investigacion',
        message:
          "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.",
      },
      {
        class: 'warning',
        date: '21-02-2018',
        header: 'Sobre contratos',
        message:
          "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card.",
      },
    ];
  }

  ngOnInit(): void {}

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

}

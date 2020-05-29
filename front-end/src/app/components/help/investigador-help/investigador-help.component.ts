import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-investigador-help',
  templateUrl: './investigador-help.component.html',
  styleUrls: ['./investigador-help.component.css']
})
export class InvestigadorHelpComponent implements OnInit {

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
        header: 'Administrar proyecto',
        message:
          "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web card she has is the Lorem card.",
      },
      {
        class: 'blue',
        date: '19-04-2018 - Yesterday',
        header: 'Como dar de concluido el proyecto',
        message:
          "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.",
      },
      {
        class: 'warning',
        date: '21-02-2018',
        header: 'Como hacer una publicacion',
        message:
          "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card.",
      },
      {
        class: 'red',
        date: '21-02-2020',
        header: 'Sobre difusion',
        message:
          "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer on the web by far... While that's mock-ups and this is politics, is the Lorem card lalalalalalalallaalaalalal lalal  uno dos tres cuatro.",
      }
    ];
  }

  ngOnInit(): void {}

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

}

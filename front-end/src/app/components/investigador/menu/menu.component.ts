import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public sidebarVisible: boolean = true;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
  }

  toggleFullWidth() {
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    this.cdr.detectChanges();
  }

}

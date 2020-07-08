import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GLOBAL } from 'src/app/services/global';

@Component({
  selector: 'app-show-proyecto',
  templateUrl: './show-proyecto.component.html',
  styleUrls: ['./show-proyecto.component.css']
})
export class ShowProyectoComponent implements OnInit {

  public sidebarVisible: boolean = true;
  public pieOptions: any = {};
  public isResizing: boolean = false;

  private token: string;
  public url: string;

  constructor(
    private sidebarService: SidebarService,
    private cdr: ChangeDetectorRef,
    private _auth: AuthService
    ) {
      this.token = this._auth.getToken();
      this.url = GLOBAL.url;
    }

  ngOnInit(): void {
    this.pieOptions = {
      color: ['#49c5b6', '#e47297', '#a27ce6', '#ffce4b', '#3eacff'],
      title: {
        text: 'User access source',
        subtext: 'Purely fictitious',
        x: 'center',
        textStyle: {
          color: '#C2C2C2'
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Video ad', 'Email marketing', 'Alliance advertising', 'Direct interview', 'Search engine'],
        textStyle: {
          color: '#C2C2C2'
        }
      },
      series: [
        {
          name: 'Access source',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 135, name: 'Video ad' },
            { value: 310, name: 'Email marketing' },
            { value: 234, name: 'Alliance advertising' },
            { value: 335, name: 'Direct interview' },
            { value: 1548, name: 'Search engine' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
  toggleFullWidth() {
    this.isResizing = true;
    this.sidebarService.toggle();
    this.sidebarVisible = this.sidebarService.getStatus();
    let that = this;
    setTimeout( () => {
      that.isResizing = false;
      that.cdr.detectChanges();
    }, 400);
  }
}

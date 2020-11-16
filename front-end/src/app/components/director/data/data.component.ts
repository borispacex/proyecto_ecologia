import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { EChartOption, ECharts } from 'echarts';
import { SidebarService } from 'src/app/services/sidebar.service';
import * as echarts from 'echarts';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GLOBAL } from 'src/app/services/global';

@Component({
	selector: 'app-data',
	templateUrl: './data.component.html',
	styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

	public sidebarVisible: boolean = true;
	public isResizing: boolean = false;

	private token: string;
	public url: string;

	constructor(private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private _auth: AuthService) {
		this.token = this._auth.getToken();
		this.url = GLOBAL.url;
	}

	ngOnInit() {

	}

	toggleFullWidth() {
		this.isResizing = true;
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		let that = this;
		setTimeout(function () {
			that.isResizing = false;
			that.cdr.detectChanges();
		}, 400);
	}
}

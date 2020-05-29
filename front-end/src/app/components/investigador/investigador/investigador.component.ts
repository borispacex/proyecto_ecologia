import { Component, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ThemeService } from 'src/app/services/theme.service';
import { Title } from '@angular/platform-browser';
import { takeUntil, map, filter, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-investigador',
  templateUrl: './investigador.component.html',
  styleUrls: ['./investigador.component.css']
})
export class InvestigadorComponent implements AfterViewInit, OnInit, OnDestroy {

  public title = 'lucid';
  public isStopLoading: boolean = false;
  public showNotifMenu: boolean = false;
  public showToggleMenu: boolean = false;
  public navTab: string = 'menu';
  public currentActiveMenu = 'light';
  public currentActiveSubMenu;
  public themeClass: string = 'theme-cyan';
  public smallScreenMenu = '';
  public darkClass: string = '';
  private ngUnsubscribe = new Subject();

  constructor(
    private _auth: AuthService,
    public sidebarService: SidebarService,
    private router: Router, 
    private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private titleService: Title
    ) { 
    this.activatedRoute.url.pipe(takeUntil(this.ngUnsubscribe)).subscribe(url => {
      this.isStopLoading = false;
      this.getActiveRoutes();
    });

    this.themeService.themeClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeClass => {
      this.themeClass = themeClass;
    });

    this.themeService.smallScreenMenuShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(showMenuClass => {
      this.smallScreenMenu = showMenuClass;
    });

    this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
      this.darkClass = darkClass;
    });
  }

  ngOnInit() {
    let that = this;
    this.router.events
    .pipe(filter((event) => event instanceof NavigationEnd))
    .pipe(map(() => this.activatedRoute))
    .pipe(map((route) => {
      that.themeService.hideMenu();
      while (route.firstChild) route = route.firstChild;
      return route;
    }))
    .pipe(filter((route) => route.outlet === 'primary'))
    .pipe(mergeMap((route) => route.data))
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((event) => this.titleService.setTitle(event['title']));
  }
  logout() {
    this._auth.logOut();
    this.router.navigate(['login']);
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggleNotificationDropMenu() {
    this.showNotifMenu = !this.showNotifMenu;
  }

  toggleSettingDropMenu() {
    this.showToggleMenu = !this.showToggleMenu;
  }

  ngAfterViewInit() {
    let that = this;
    setTimeout(function () {
      that.isStopLoading = true;
    }, 1000);

  }

  getActiveRoutes() {
    let segments: Array<string> = this.router.url.split('/');
    this.currentActiveMenu = segments[2];
    this.currentActiveSubMenu = segments[3];
  }

  activeInactiveMenu($event) {
    if ($event.item && $event.item === this.currentActiveMenu) {
      this.currentActiveMenu = '';
    } else {
      this.currentActiveMenu = $event.item;
    }
  }

}

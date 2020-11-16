import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { SidebarService } from 'src/app/services/sidebar.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { Title } from '@angular/platform-browser';
import { takeUntil, filter, map, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsuariosService } from 'src/app/services/admin/usuarios.service';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements AfterViewInit, OnInit, OnDestroy {

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

  private id_persona;
  private token;

  constructor(
    public sidebarService: SidebarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private themeService: ThemeService,
    private titleService: Title,
    private _auth: AuthService,
    private _serviceUsuario: UsuariosService
  ) {
    this.activatedRoute.url.pipe(takeUntil(this.ngUnsubscribe)).subscribe(url => {
      this.isStopLoading = false;
      this.getActiveRoutes();
    });

    this.token = this._auth.getToken();
    this.id_persona = JSON.parse(localStorage.getItem('identity_user')).id_persona;
    this._serviceUsuario.getPersonaById(this.id_persona, this.token)
    .then(response => {
      this.themeClass = response.persona.color;
      this.darkClass = response.persona.tema;

      this.themeService.themeClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(themeClass => {
        this.themeClass = themeClass;
      });

      this.themeService.smallScreenMenuShow.pipe(takeUntil(this.ngUnsubscribe)).subscribe(showMenuClass => {
        this.smallScreenMenu = showMenuClass;
      });

      this.themeService.darkClassChange.pipe(takeUntil(this.ngUnsubscribe)).subscribe(darkClass => {
        this.darkClass = darkClass;
      });

    }).catch(error => { console.log('Error al obtener persona por id', error); });
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

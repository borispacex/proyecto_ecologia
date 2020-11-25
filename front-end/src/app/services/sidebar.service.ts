import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public sidebarVisible: boolean = true;

  constructor() { }

  setTrue() {
    this.sidebarVisible = true;
  }

  toggle() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  getStatus() {
    return this.sidebarVisible;
  }
}

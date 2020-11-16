import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaHelpComponent } from './cuenta-help.component';

describe('CuentaHelpComponent', () => {
  let component: CuentaHelpComponent;
  let fixture: ComponentFixture<CuentaHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

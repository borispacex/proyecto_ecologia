import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProyectoInvComponent } from './list-proyecto-inv.component';

describe('ListProyectoInvComponent', () => {
  let component: ListProyectoInvComponent;
  let fixture: ComponentFixture<ListProyectoInvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProyectoInvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProyectoInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

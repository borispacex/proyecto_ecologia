import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProyectoComponent } from './show-proyecto.component';

describe('ShowProyectoComponent', () => {
  let component: ShowProyectoComponent;
  let fixture: ComponentFixture<ShowProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

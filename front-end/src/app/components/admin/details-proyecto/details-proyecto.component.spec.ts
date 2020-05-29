import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProyectoComponent } from './details-proyecto.component';

describe('DetailsProyectoComponent', () => {
  let component: DetailsProyectoComponent;
  let fixture: ComponentFixture<DetailsProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

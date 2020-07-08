import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportesComponent } from './generate-reportes.component';

describe('GenerateReportesComponent', () => {
  let component: GenerateReportesComponent;
  let fixture: ComponentFixture<GenerateReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

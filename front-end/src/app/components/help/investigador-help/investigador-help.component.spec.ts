import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigadorHelpComponent } from './investigador-help.component';

describe('InvestigadorHelpComponent', () => {
  let component: InvestigadorHelpComponent;
  let fixture: ComponentFixture<InvestigadorHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigadorHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigadorHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

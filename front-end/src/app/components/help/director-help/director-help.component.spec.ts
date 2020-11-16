import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorHelpComponent } from './director-help.component';

describe('DirectorHelpComponent', () => {
  let component: DirectorHelpComponent;
  let fixture: ComponentFixture<DirectorHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorHelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

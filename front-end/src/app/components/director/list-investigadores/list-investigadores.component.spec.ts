import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInvestigadoresComponent } from './list-investigadores.component';

describe('ListInvestigadoresComponent', () => {
  let component: ListInvestigadoresComponent;
  let fixture: ComponentFixture<ListInvestigadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInvestigadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInvestigadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

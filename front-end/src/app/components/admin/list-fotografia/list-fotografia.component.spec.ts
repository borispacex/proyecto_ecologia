import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFotografiaComponent } from './list-fotografia.component';

describe('ListFotografiaComponent', () => {
  let component: ListFotografiaComponent;
  let fixture: ComponentFixture<ListFotografiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFotografiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFotografiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

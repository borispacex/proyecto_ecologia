import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTokenExpiredComponent } from './page-token-expired.component';

describe('PageTokenExpiredComponent', () => {
  let component: PageTokenExpiredComponent;
  let fixture: ComponentFixture<PageTokenExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTokenExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTokenExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

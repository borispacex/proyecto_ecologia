import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvProfilePostComponent } from './inv-profile-post.component';

describe('InvProfilePostComponent', () => {
  let component: InvProfilePostComponent;
  let fixture: ComponentFixture<InvProfilePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvProfilePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvProfilePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

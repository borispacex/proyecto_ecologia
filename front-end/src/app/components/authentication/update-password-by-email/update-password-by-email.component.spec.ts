import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordByEmailComponent } from './update-password-by-email.component';

describe('UpdatePasswordByEmailComponent', () => {
  let component: UpdatePasswordByEmailComponent;
  let fixture: ComponentFixture<UpdatePasswordByEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePasswordByEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

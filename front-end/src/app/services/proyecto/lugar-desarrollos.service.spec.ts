import { TestBed } from '@angular/core/testing';

import { LugarDesarrollosService } from './lugar-desarrollos.service';

describe('LugarDesarrollosService', () => {
  let service: LugarDesarrollosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LugarDesarrollosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BasicaTecnicasService } from './basica-tecnicas.service';

describe('BasicaTecnicasService', () => {
  let service: BasicaTecnicasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicaTecnicasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

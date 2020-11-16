import { TestBed } from '@angular/core/testing';

import { PetiArchivosService } from './peti-archivos.service';

describe('PetiArchivosService', () => {
  let service: PetiArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetiArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

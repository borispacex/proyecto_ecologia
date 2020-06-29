import { TestBed } from '@angular/core/testing';

import { PubliArchivosService } from './publi-archivos.service';

describe('PubliArchivosService', () => {
  let service: PubliArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubliArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

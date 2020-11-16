import { TestBed } from '@angular/core/testing';

import { ContraArchivosService } from './contra-archivos.service';

describe('ContraArchivosService', () => {
  let service: ContraArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContraArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

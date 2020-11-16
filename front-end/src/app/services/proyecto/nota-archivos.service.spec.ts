import { TestBed } from '@angular/core/testing';

import { NotaArchivosService } from './nota-archivos.service';

describe('NotaArchivosService', () => {
  let service: NotaArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotaArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CursoArchivosService } from './curso-archivos.service';

describe('CursoArchivosService', () => {
  let service: CursoArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursoArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PermisoArchivosService } from './permiso-archivos.service';

describe('PermisoArchivosService', () => {
  let service: PermisoArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PermisoArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

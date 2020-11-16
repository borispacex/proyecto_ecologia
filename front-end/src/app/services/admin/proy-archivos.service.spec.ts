import { TestBed } from '@angular/core/testing';

import { ProyArchivosService } from './proy-archivos.service';

describe('ProyArchivosService', () => {
  let service: ProyArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

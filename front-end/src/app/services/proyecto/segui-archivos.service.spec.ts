import { TestBed } from '@angular/core/testing';

import { SeguiArchivosService } from './segui-archivos.service';

describe('SeguiArchivosService', () => {
  let service: SeguiArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguiArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

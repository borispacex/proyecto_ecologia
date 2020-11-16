import { TestBed } from '@angular/core/testing';

import { ConvArchivosService } from './conv-archivos.service';

describe('ConvArchivosService', () => {
  let service: ConvArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

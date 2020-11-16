import { TestBed } from '@angular/core/testing';

import { ContratadosService } from './contratados.service';

describe('ContratadosService', () => {
  let service: ContratadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

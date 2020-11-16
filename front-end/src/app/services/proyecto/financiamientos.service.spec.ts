import { TestBed } from '@angular/core/testing';

import { FinanciamientosService } from './financiamientos.service';

describe('FinanciamientosService', () => {
  let service: FinanciamientosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanciamientosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

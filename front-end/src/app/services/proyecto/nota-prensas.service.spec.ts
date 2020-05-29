import { TestBed } from '@angular/core/testing';

import { NotaPrensasService } from './nota-prensas.service';

describe('NotaPrensasService', () => {
  let service: NotaPrensasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotaPrensasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

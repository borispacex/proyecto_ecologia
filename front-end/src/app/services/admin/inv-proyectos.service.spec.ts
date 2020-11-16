import { TestBed } from '@angular/core/testing';

import { InvProyectosService } from './inv-proyectos.service';

describe('InvProyectosService', () => {
  let service: InvProyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvProyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { EventoArchivosService } from './evento-archivos.service';

describe('EventoArchivosService', () => {
  let service: EventoArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

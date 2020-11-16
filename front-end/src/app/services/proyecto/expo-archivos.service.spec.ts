import { TestBed } from '@angular/core/testing';

import { ExpoArchivosService } from './expo-archivos.service';

describe('ExpoArchivosService', () => {
  let service: ExpoArchivosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpoArchivosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

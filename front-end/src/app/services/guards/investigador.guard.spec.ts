import { TestBed } from '@angular/core/testing';

import { InvestigadorGuard } from './investigador.guard';

describe('InvestigadorGuard', () => {
  let guard: InvestigadorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(InvestigadorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CpfExisteService } from './cpf-existe.service';

describe('CpfExisteService', () => {
  let service: CpfExisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpfExisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

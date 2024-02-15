import { TestBed } from '@angular/core/testing';

import { ServicioPrestadoService } from './servicio-prestado.service';

describe('ServicioPrestadoService', () => {
  let service: ServicioPrestadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPrestadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

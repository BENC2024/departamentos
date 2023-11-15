import { TestBed } from '@angular/core/testing';

import { MunicipioServicesService } from './municipio.services.service';

describe('MunicipioServicesService', () => {
  let service: MunicipioServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunicipioServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DataProvinciaService } from './provincia.service';

describe('DataProvinciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataProvinciaService = TestBed.get(DataProvinciaService);
    expect(service).toBeTruthy();
  });
});

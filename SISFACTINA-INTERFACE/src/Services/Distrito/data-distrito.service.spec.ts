import { TestBed } from '@angular/core/testing';

import { DataDistritoService } from './distrito.service';

describe('DataDistritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDistritoService = TestBed.get(DataDistritoService);
    expect(service).toBeTruthy();
  });
});

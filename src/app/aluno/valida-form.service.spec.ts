import { TestBed } from '@angular/core/testing';

import { ValidaFormService } from './valida-form.service';

describe('ValidaFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidaFormService = TestBed.get(ValidaFormService);
    expect(service).toBeTruthy();
  });
});

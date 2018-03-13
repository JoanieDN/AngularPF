import { TestBed, inject } from '@angular/core/testing';

import { CreateCarService } from './create-car.service';

describe('CreateCarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCarService]
    });
  });

  it('should be created', inject([CreateCarService], (service: CreateCarService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CalcModelService } from './calc-model.service';

describe('CalcModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalcModelService]
    });
  });

  it('should be created', inject([CalcModelService], (service: CalcModelService) => {
    expect(service).toBeTruthy();
  }));
});

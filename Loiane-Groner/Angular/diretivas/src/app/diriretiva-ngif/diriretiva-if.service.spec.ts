import { TestBed } from '@angular/core/testing';

import { DiriretivaIfService } from './diriretiva-if.service';

describe('DiriretivaIfService', () => {
  let service: DiriretivaIfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiriretivaIfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

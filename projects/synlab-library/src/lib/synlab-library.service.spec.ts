import { TestBed } from '@angular/core/testing';

import { SynlabLibraryService } from './synlab-library.service';

describe('SynlabLibraryService', () => {
  let service: SynlabLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SynlabLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

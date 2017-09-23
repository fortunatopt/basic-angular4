import { TestBed, inject } from '@angular/core/testing';

import { LinksDataService } from './links-data.service';

describe('LinksDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinksDataService]
    });
  });

  it('should be created', inject([LinksDataService], (service: LinksDataService) => {
    expect(service).toBeTruthy();
  }));
});

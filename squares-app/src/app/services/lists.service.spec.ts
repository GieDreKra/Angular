import { TestBed } from '@angular/core/testing';

import { ListsService } from './lists.service';

describe('PointsListsService', () => {
  let service: ListsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

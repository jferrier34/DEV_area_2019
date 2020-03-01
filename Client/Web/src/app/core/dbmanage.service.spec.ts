import { TestBed } from '@angular/core/testing';

import { DBManageService } from './dbmanage.service';

describe('DBManageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DBManageService = TestBed.get(DBManageService);
    expect(service).toBeTruthy();
  });
});

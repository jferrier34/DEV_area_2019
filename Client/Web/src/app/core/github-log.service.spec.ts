import { TestBed } from '@angular/core/testing';

import { GithubLogService } from './github-log.service';

describe('GithubLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubLogService = TestBed.get(GithubLogService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RequestWorkflowGuard } from './request-workflow.guard';

describe('RequestWorkflowGuard', () => {
  let guard: RequestWorkflowGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RequestWorkflowGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

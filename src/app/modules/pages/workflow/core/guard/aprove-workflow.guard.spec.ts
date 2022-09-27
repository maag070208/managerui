import { TestBed } from '@angular/core/testing';

import { AproveWorkflowGuard } from './aprove-workflow.guard';

describe('AproveWorkflowGuard', () => {
  let guard: AproveWorkflowGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AproveWorkflowGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

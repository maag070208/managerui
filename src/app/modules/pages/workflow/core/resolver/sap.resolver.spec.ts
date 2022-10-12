import { TestBed } from '@angular/core/testing';

import { SapResolver } from './sap.resolver';

describe('SapResolver', () => {
  let resolver: SapResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SapResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

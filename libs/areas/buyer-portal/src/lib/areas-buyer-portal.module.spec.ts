import { async, TestBed } from '@angular/core/testing';
import { AreasBuyerPortalModule } from './areas-buyer-portal.module';

describe('AreasBuyerPortalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AreasBuyerPortalModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AreasBuyerPortalModule).toBeDefined();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { AreasVendorPortalModule } from './areas-vendor-portal.module';

describe('AreasVendorPortalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AreasVendorPortalModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AreasVendorPortalModule).toBeDefined();
  });
});

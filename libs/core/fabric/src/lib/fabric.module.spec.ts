import { async, TestBed } from '@angular/core/testing';
import { FabricModule } from './fabric.module';

describe('FabricModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FabricModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FabricModule).toBeDefined();
  });
});

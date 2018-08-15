import { async, TestBed } from '@angular/core/testing';
import { FiberModule } from './fiber.module';

describe('FiberModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FiberModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FiberModule).toBeDefined();
  });
});

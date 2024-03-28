import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CForkJoinComponent } from './cfork-join.component';

describe('CForkJoinComponent', () => {
  let component: CForkJoinComponent;
  let fixture: ComponentFixture<CForkJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CForkJoinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CForkJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

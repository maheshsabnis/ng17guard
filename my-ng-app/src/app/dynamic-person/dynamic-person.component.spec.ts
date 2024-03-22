import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPersonComponent } from './dynamic-person.component';

describe('DynamicPersonComponent', () => {
  let component: DynamicPersonComponent;
  let fixture: ComponentFixture<DynamicPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicPersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

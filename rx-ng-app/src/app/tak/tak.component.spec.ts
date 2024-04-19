import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakComponent } from './tak.component';

describe('TakComponent', () => {
  let component: TakComponent;
  let fixture: ComponentFixture<TakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

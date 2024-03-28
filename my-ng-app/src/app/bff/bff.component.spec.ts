import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BFFComponent } from './bff.component';

describe('BFFComponent', () => {
  let component: BFFComponent;
  let fixture: ComponentFixture<BFFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BFFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BFFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

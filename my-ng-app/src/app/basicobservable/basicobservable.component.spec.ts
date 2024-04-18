import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicobservableComponent } from './basicobservable.component';

describe('BasicobservableComponent', () => {
  let component: BasicobservableComponent;
  let fixture: ComponentFixture<BasicobservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicobservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicobservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

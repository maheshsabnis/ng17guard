import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHttpComponent } from './category-http.component';

describe('CategoryHttpComponent', () => {
  let component: CategoryHttpComponent;
  let fixture: ComponentFixture<CategoryHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

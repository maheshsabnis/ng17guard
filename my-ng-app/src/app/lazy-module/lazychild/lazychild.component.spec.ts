/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LazychildComponent } from './lazychild.component';

describe('LazychildComponent', () => {
  let component: LazychildComponent;
  let fixture: ComponentFixture<LazychildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazychildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazychildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

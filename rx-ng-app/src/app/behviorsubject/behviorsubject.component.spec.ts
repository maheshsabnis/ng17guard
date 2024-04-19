/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BehviorsubjectComponent } from './behviorsubject.component';

describe('BehviorsubjectComponent', () => {
  let component: BehviorsubjectComponent;
  let fixture: ComponentFixture<BehviorsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BehviorsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BehviorsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

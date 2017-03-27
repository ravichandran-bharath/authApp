/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SamplelogComponent } from './samplelog.component';

describe('SamplelogComponent', () => {
  let component: SamplelogComponent;
  let fixture: ComponentFixture<SamplelogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplelogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplelogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

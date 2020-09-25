import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubIframeComponent } from './sub-iframe.component';

describe('SubIframeComponent', () => {
  let component: SubIframeComponent;
  let fixture: ComponentFixture<SubIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

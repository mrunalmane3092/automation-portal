import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframesDisplayComponent } from './iframes-display.component';

describe('IframesDisplayComponent', () => {
  let component: IframesDisplayComponent;
  let fixture: ComponentFixture<IframesDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframesDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

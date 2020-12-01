import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadTestingComponent } from './load-testing.component';

describe('LoadTestingComponent', () => {
  let component: LoadTestingComponent;
  let fixture: ComponentFixture<LoadTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

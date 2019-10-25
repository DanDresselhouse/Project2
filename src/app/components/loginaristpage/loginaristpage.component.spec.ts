import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginaristpageComponent } from './loginaristpage.component';

describe('LoginaristpageComponent', () => {
  let component: LoginaristpageComponent;
  let fixture: ComponentFixture<LoginaristpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginaristpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginaristpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserupdatepageComponent } from './userupdatepage.component';

describe('UserupdatepageComponent', () => {
  let component: UserupdatepageComponent;
  let fixture: ComponentFixture<UserupdatepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserupdatepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserupdatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

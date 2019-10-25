import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseroptionspageComponent } from './useroptionspage.component';

describe('UseroptionspageComponent', () => {
  let component: UseroptionspageComponent;
  let fixture: ComponentFixture<UseroptionspageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseroptionspageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseroptionspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

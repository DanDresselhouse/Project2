import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistuploadsongpageComponent } from './artistuploadsongpage.component';

describe('ArtistuploadsongpageComponent', () => {
  let component: ArtistuploadsongpageComponent;
  let fixture: ComponentFixture<ArtistuploadsongpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistuploadsongpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistuploadsongpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

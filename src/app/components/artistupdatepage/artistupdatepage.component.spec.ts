import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistupdatepageComponent } from './artistupdatepage.component';

describe('ArtistupdatepageComponent', () => {
  let component: ArtistupdatepageComponent;
  let fixture: ComponentFixture<ArtistupdatepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistupdatepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistupdatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

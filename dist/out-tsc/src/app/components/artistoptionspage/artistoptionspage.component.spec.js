import { async, TestBed } from '@angular/core/testing';
import { ArtistoptionspageComponent } from './artistoptionspage.component';
describe('ArtistoptionspageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ArtistoptionspageComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ArtistoptionspageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=artistoptionspage.component.spec.js.map
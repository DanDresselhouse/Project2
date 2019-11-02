import { async, TestBed } from '@angular/core/testing';
import { UseroptionspageComponent } from './useroptionspage.component';
describe('UseroptionspageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UseroptionspageComponent]
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
//# sourceMappingURL=useroptionspage.component.spec.js.map
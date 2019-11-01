import { async, TestBed } from '@angular/core/testing';
import { CreateaccountpageComponent } from './createaccountpage.component';
describe('CreateaccountpageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreateaccountpageComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CreateaccountpageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=createaccountpage.component.spec.js.map
import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { CabeceraComponent } from './cabecera.component';
describe('CabeceraComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [CabeceraComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CabeceraComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=cabecera.component.spec.js.map
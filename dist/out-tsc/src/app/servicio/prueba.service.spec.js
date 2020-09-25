import { TestBed } from '@angular/core/testing';
import { PruebaService } from './prueba.service';
describe('PruebaService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PruebaService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=prueba.service.spec.js.map
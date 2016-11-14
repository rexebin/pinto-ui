/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PageWidthService } from './page-width.service';
import { isNodeFlagSet } from 'tslint/lib/language/utils';

describe('Service: PageWidth', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PageWidthService]
        });
    });

    it('should have boolean flat isFluid with default value false', inject([PageWidthService], (service: PageWidthService) => {
        expect(service).toBeTruthy();
        expect(service.isFluid).toBe(false);
    }));

    it('should return the correct isFluid value after setting it', inject([PageWidthService], (service: PageWidthService) => {
        service.isFluid = true;
        expect(service.isFluid).toBe(true);
        service.isFluid = false;
        expect(service.isFluid).toBe(false);
    }));


});

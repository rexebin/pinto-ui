/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PageWidthService } from './page-width.service';

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

  it('should update observable when isFluid is changed', inject([PageWidthService], (service: PageWidthService) => {
    let _isFluid = false;
    let sub = service.widthChanged.subscribe((isFluid) => {
      _isFluid = isFluid
    });
    service.isFluid = true;
    expect(_isFluid).toBe(true);
    service.isFluid = false;
    expect(_isFluid).toBe(false);
    sub.unsubscribe();
  }));

});

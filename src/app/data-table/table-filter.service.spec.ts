/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableFilterService, SortParams, PageParams, TableFilter } from './table-filter.service';

describe('TableFilterService', () => {
  let service: TableFilterService;
  let filter: TableFilter;
  let defaultFilter: TableFilter;
  let expectedFilter: TableFilter;
  let sortParam: SortParams;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableFilterService]
    });
  });
  
  beforeEach(() => {
    service = TestBed.get(TableFilterService);
    service.filter.subscribe(f => {
      filter = f;
    });
    defaultFilter = {
      sortBy: 'created',
      order: 'desc',
      page: 1,
      pageSize: 10
    };
    sortParam = {
      order: 'asc',
      sortBy: 'property'
    };
    expectedFilter = {
      order: 'asc',
      sortBy: 'property',
      page: 1,
      pageSize: 10
    };
  });
  describe('Without localStorage', () => {
    beforeEach(() => {
      spyOn(service, '_getItem');
      spyOn(service, '_setItem');
      service.init('entity');
    });
    it('should return default value', () => {
      expect(filter).toEqual(defaultFilter);
      expect(service.currentFilter).toEqual(defaultFilter);
    });
    
    it('should call _getItem on init', () => {
      expect(service._getItem).toHaveBeenCalled();
    });
    
    it('should return correct value', () => {
      service.setFilter(sortParam);
      expect(service._setItem).toHaveBeenCalled();
      expect(filter).toEqual(expectedFilter);
      expect(service.currentFilter).toEqual(expectedFilter);
    });
    
    it('should update value and return current value', () => {
      const newSortParam: SortParams = {
        order: 'desc',
        sortBy: 'name'
      };
      service.setFilter(newSortParam);
      expect(service._setItem).toHaveBeenCalled();
      expectedFilter.order = 'desc';
      expectedFilter.sortBy = 'name';
      expect(filter).toEqual(expectedFilter);
      expect(service.currentFilter).toEqual(expectedFilter);
    });
    
    it('should handle both sort and page correctly', () => {
      const pageParams: PageParams = {
        page: 2,
        pageSize: 20
      };
      service.setFilter(pageParams);
      expect(service._setItem).toHaveBeenCalled();
      expect(filter).toEqual(
        {
          order: 'desc',
          sortBy: 'created',
          page: 2,
          pageSize: 20
        }
      );
      const newSortParam: SortParams = {
        order: 'desc',
        sortBy: 'name'
      };
      service.setFilter(newSortParam);
      expect(service._setItem).toHaveBeenCalled();
      expect(filter).toEqual(
        {
          order: 'desc',
          sortBy: 'name',
          page: 2,
          pageSize: 20
        }
      );
    });
  });
  
  describe('LocalStorage', () => {
    beforeEach(() => {
      localStorage.setItem('entity', null);
      spyOn(service, '_getItem').and.callThrough();
      spyOn(service, '_setItem').and.callThrough();
    });
  
    it('should save default value to storage on init if there no localStorage value', () => {
      service.init('entity');
      expect(JSON.parse(localStorage.getItem('entity'))).toEqual(defaultFilter);
    });
  
    it('should check current value in localStorage and use the value instead of default value', () => {
      localStorage.setItem('entity', JSON.stringify(expectedFilter));
      service.init('entity');
      expect(service.currentFilter).toEqual(expectedFilter);
    });

    it('should update localStorage on setFilter', () => {
      service.init('entity');
      service.setFilter(sortParam);
      expect(service._setItem).toHaveBeenCalled();
      expect(service.currentFilter).toEqual(expectedFilter);
      expect(JSON.parse(localStorage.getItem('entity'))).toEqual(expectedFilter);
    });
  });
});

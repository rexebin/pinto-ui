/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableFilterService, SortParams, PageParams, TableFilter } from './table-filter.service';

fdescribe('TableFilterService', () => {
  let service: TableFilterService;
  let filter: TableFilter;
  let defaultFilter: TableFilter;
  let expectedFilter: TableFilter;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableFilterService]
    });
  });
  
  beforeEach(() => {
    service = TestBed.get(TableFilterService);
    spyOn(service, '_getItem');
    spyOn(service, '_setItem');
    service.init('entity');
    
    service.filter.subscribe(f => {
      filter = f;
    });
    defaultFilter = {
      sortBy: 'created',
      order: 'desc',
      page: 1,
      pageSize: 10
    };
    
  });
  
  it('should return default value', () => {
    expect(filter).toEqual(defaultFilter);
    expect(service.currentFilter).toEqual(defaultFilter);
  });
  
  it('should call _getItem on init', () => {
    expect(service._getItem).toHaveBeenCalled();
  });
  describe('Sort', () => {
    let sortParam: SortParams;
    beforeEach(() => {
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
  
});

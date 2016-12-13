/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableFilterService, TableFilters, SortParams, PageParams } from './table-filter.service';

describe('TableFilterService', () => {
  let service: TableFilterService;
  let filters: TableFilters;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableFilterService]
    });
  });
  
  beforeEach(() => {
    service = TestBed.get(TableFilterService);
    service.filters.subscribe(f => {
      filters = f;
    });
  });
  
  it('should return default value', () => {
    expect(filters).toEqual([]);
  });
  
  describe('Sort', () => {
    let sortParam: SortParams;
    beforeEach(() => {
      sortParam = {
        entity: 'entity',
        order: 'asc',
        sortBy: 'property'
      };
    });
    it('should return correct value and return current value', () => {
      expect(service.currentValue).toEqual([]);
      service.filter(sortParam);
      expect(filters).toEqual([sortParam]);
      expect(service.currentValue).toEqual([sortParam]);
    });
    
    it('should update value and return current value', () => {
      service.filter(sortParam);
      expect(filters).toEqual([sortParam]);
      const newSortParam: SortParams = {
        entity: 'entity',
        order: 'desc',
        sortBy: 'name'
      };
      service.filter(newSortParam);
      expect(filters).toEqual([newSortParam]);
      expect(service.currentValue).toEqual([newSortParam]);
    });
    
    it('should handle both sort and page correctly', () => {
      service.filter(sortParam);
      const pageParams: PageParams = {
        entity: 'entity',
        page: 1,
        pageSize: 10
      };
      service.filter(pageParams);
      expect(filters).toEqual([
        {
          entity: 'entity',
          order: 'asc',
          sortBy: 'property',
          page: 1,
          pageSize: 10
        }
      ]);
      const newSortParam: SortParams = {
        entity: 'entity',
        order: 'desc',
        sortBy: 'name'
      };
      service.filter(newSortParam);
      expect(filters).toEqual([
        {
          entity: 'entity',
          order: 'desc',
          sortBy: 'name',
          page: 1,
          pageSize: 10
        }
      ]);
      service.filter({
        entity: 'entity',
        page: 2,
        pageSize: 20
      });
      expect(filters).toEqual([
        {
          entity: 'entity',
          order: 'desc',
          sortBy: 'name',
          page: 2,
          pageSize: 20
        }
      ]);
    });
    
    it('should push new entity filter to filters', () => {
      service.filter(sortParam);
      expect(filters).toEqual([sortParam]);
      const newSortParam: SortParams = {
        entity: 'entity1',
        order: 'asc',
        sortBy: 'sort'
      };
      const expectedFilters = [
        sortParam,
        newSortParam
      ];
      service.filter(newSortParam);
      expect(filters).toEqual(expectedFilters);
      
      const pageParam: PageParams = {
        entity: 'entity3',
        page: 5,
        pageSize: 30
      };
      
      service.filter(pageParam);
      expect(filters).toEqual([
        ...expectedFilters,
        pageParam
      ]);
      
      expect(service.currentValue).toEqual(
        [
          ...expectedFilters,
          pageParam
        ]
      );
    });
    
  });
  
});

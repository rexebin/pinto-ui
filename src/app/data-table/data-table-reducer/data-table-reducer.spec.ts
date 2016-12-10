import { DataTableActions, SortPayload, PagePayload } from './data-table.actions';
import { DataTableReducer, DataTableState } from './data-table.reducer';

fdescribe('Data Table Reducer', () => {
  let action: DataTableActions;
  beforeEach(() => {
    action = new DataTableActions();
  });
  
  it('should return initial state', () => {
    expect(DataTableReducer(undefined, { type: '' })).toEqual([]);
  });
  
  describe('SortingOrPaging Action', () => {
    let payload: SortPayload;
    let state: DataTableState;
    beforeEach(() => {
      payload = {
        entity: 'entity1',
        order: 'asc',
        sortBy: 'property'
      };
      state = [payload];
    });
    
    it('should handle sortingOrPaging action with initial state', () => {
      expect(DataTableReducer(undefined, action.sortingOrPaging(payload))).toEqual(state);
    });
    
    it('should update state if action is for the same entity', () => {
      expect(DataTableReducer(state, action.sortingOrPaging(payload))).toEqual(state);
      const p: SortPayload = {
        entity: 'entity1',
        order: 'desc',
        sortBy: 'newProperty'
      };
      const expectedState = [p];
      expect(DataTableReducer(state, action.sortingOrPaging(p))).toEqual(expectedState);
      
    });
    
    it('should add state to state array for new entity', () => {
      const p: SortPayload = {
        entity: 'entity2',
        order: 'desc',
        sortBy: 'property'
      };
      expect(DataTableReducer(state, action.sortingOrPaging(p))).toEqual([
        ...state,
        p
      ]);
    });
    
    it('should keep other non-relevant states if any when updating', () => {
      
      const expectedState: DataTableState = [
        {
          entity: 'entity1',
          order: 'desc',
          sortBy: 'newProperty',
          pageSize: 10,
          currentPage: 1
        }
      ];
      const p: SortPayload = {
        entity: 'entity1',
        order: 'desc',
        sortBy: 'newProperty'
      };
      
      state[0].pageSize = 10;
      state[0].currentPage = 1;
      expect(DataTableReducer(state, action.sortingOrPaging(p))).toEqual(expectedState);
    });
    
  });
  
  describe('Page Action', () => {
    let payload: PagePayload;
    let state: DataTableState;
    beforeEach(() => {
      payload = {
        entity: 'entity',
        currentPage: 1,
        pageSize: 10
      };
      state = [payload];
    });
    
    it('should return handle page action with initial state', () => {
      expect(DataTableReducer(undefined, action.sortingOrPaging(payload))).toEqual(state);
    });
    
    it('should update state when action is for the same entity', () => {
      
    });
    
    it('should add state to existing state array when action is for new entity', () => {
      
    });
    
    it('should keep other non-relevant states if any when updating', () => {
      
    });
  });
});

import { DataTableActions, SortPayload } from './data-table.actions';
import { DataTableReducer, DataTableState } from './data-table.reducer';

fdescribe('Data Table Reducer', () => {
  let action: DataTableActions;
  beforeEach(() => {
    action = new DataTableActions();
  });
  
  describe('Sort Action', () => {
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
    it('should return initial state', () => {
      expect(DataTableReducer(undefined, { type: '' })).toEqual([]);
    });
    
    it('should handle sort action with initial state', () => {
      expect(DataTableReducer(undefined, action.sort(payload))).toEqual(state);
    });
    
    it('should update state if action is for the same entity', () => {
      expect(DataTableReducer(state, action.sort(payload))).toEqual(state);
      const p: SortPayload = {
        entity: 'entity1',
        order: 'desc',
        sortBy: 'newProperty'
      };
      const expectedState = [p];
      expect(DataTableReducer(state, action.sort(p))).toEqual(expectedState);
      
    });
    
    it('should add state for new entity', () => {
      const p: SortPayload = {
        entity: 'entity2',
        order: 'desc',
        sortBy: 'property'
      };
      expect(DataTableReducer(state, action.sort(p))).toEqual([
        ...state,
        p
      ]);
    });
    
  });
  
  it('should update list parameters with page action', () => {
    
  });
  
});

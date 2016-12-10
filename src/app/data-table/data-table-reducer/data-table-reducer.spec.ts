import { DataTableActions, SortPayload } from './data-table.actions';
import { DataTableReducer } from './data-table.reducer';

fdescribe('Data Table Reducer', () => {
  let action: DataTableActions;
  beforeEach(() => {
    action = new DataTableActions();
  });
  
  it('should update list parameters with sort action', () => {
    let payload: SortPayload = { entity: 'name',
      sortParameters: {
        order: 'asc',
        sortBy: 'property'
      }
    };
    console.log(DataTableReducer({}, action.sort(payload)));
  });
  
  it('should update list parameters with page action', () => {
    
  });
});

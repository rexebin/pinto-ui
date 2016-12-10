import { SortPayload, DataTableActions, PagePayload } from './data-table.actions';
/**
 * Created by yezm on 10/12/2016.
 */


fdescribe('Data Table Action', () => {
  it('should create an action to sortingOrPaging data', () => {
    const payload: SortPayload = {
      entity: 'entityName',
      sortBy: 'propertyName',
      order: 'asc'
    };
    
    const action = new DataTableActions();
    const expectedAction = {
      type: DataTableActions.SortingOrPaging,
      payload: payload
    };
    expect(action.sortingOrPaging(payload)).toEqual(expectedAction);
  });
  
  it('should create an action to page data', () => {
    const payload: PagePayload = {
      entity: 'name',
      currentPage: 1,
      pageSize: 10
    };
    
    const action = new DataTableActions();
    const expectedAction = {
      type: DataTableActions.SortingOrPaging,
      payload: payload
    };
    
    expect(action.sortingOrPaging(payload)).toEqual(expectedAction);
  });
});

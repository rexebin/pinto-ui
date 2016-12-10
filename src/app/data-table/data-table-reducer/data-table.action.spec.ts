import { SortPayload, DataTableActions, PagePayload } from './data-table.actions';
/**
 * Created by yezm on 10/12/2016.
 */


fdescribe('Data Table Action', () => {
  it('should create an action to sort data', () => {
    const payload: SortPayload = {
      entity: 'entityName',
      sortBy: 'propertyName',
      order: 'asc'
    };
    
    const action = new DataTableActions();
    const expectedAction = {
      type: DataTableActions.Sort,
      payload: payload
    };
    expect(action.sort(payload)).toEqual(expectedAction);
  });
  
  it('should create an action to page data', () => {
    const payload: PagePayload = {
      entity: 'name',
      currentPage: 1,
      pageSize: 10
    };
    
    const action = new DataTableActions();
    const expectedAction = {
      type: DataTableActions.Page,
      payload: payload
    };
    
    expect(action.page(payload)).toEqual(expectedAction);
  });
});

# Master-Detail screen for data input

Behavior: 


1. if there is no id provided, url would be `/entity-name`:
  * list vew is full width.
  * detail/edit view is not visible.
  
1. when clicking an item in the list, or provided with an id, url would be: `/entity-name/detail(edit)/:id`:
  
  Screen size medium and above: 
  
  * screen is divided into two parts: list view and detail/edit view.
  * both list view and detail/edit view reads `id` from router parameters.
  * list view use the id to highlight the selected item.
  * detail/edit view use the id to display and load the item.
  

  Screen size below medium (mobile): 

  * list view is hidden and detail view is full width. 
  * edit is disabled and not allowed on these screen types.
  * user can click to return list view fom detail/edit view.
  

# Routes

1. `entity-name`: 
    * list view, full width
    * list view has "add" button
    * list view has search function
    * list view has pagination
    * click item move list view to the left and show details on the right, also make screen full width

1. `entity-name/:id`:
    * list view on the side, detail view on the right. 
    * detail view has "edit" button to go to edit screen.  
    * list view is hidden on mobile. 
    * On mobile, detail view has button "back to list" that toggles to hide itself and show list view.    
    * On mobile, detail view has no "edit" button.   
    
1. `entity-name/edit/:id`: 
    * user click "edit" button on detail view to get to this url.
    * list view on the side, edit view on the right.
    * when `id` is `-1`, create new entity. 
    * user click "add" button on the list view to create new entity by navigate to `entity-name/edit/-1`
    * successful save navigates back to `entity-name/:id`
    * on mobile, edit is not available. No "add" button on list view. No "edit" button on detail view. 

## Route configurations
parent route is empty path and MasterDetailComponent, with child routes:
    * `''`, ListComponent
    * `'/:id'`, DetailComponent, outlet: 'detailEdit'
    * `'edit/:id'`, EditComponent, outlet: 'detailEdit'
    
# Component Responsibilities
  
## ListComponent

ListComponent should focus on list view, it does not handle anything irrelevant to list view itself. 
It expect items to be resolved when it is being instantiated. 

## DetailComponent

DetailComponent only worry about detail screen, assuming item is resolved to it before loading it.

## EditComponent

EditComponent should only worry about add/edit screen, assuming item is resolved to it before instantiating it.

## MasterDetailComponent

MasterDetailComponent is in shared module and it will be used for all master/detail screens.
MasterDetailComponent is a dummy component, its template has two router-outlet, one for list, one for detail/edit.
MasterDetailComponent control how each router-outlet should be displayed:

1. when there is no id parameter, full width list view.

1. when there is a id and width is medium or above:
    * layout width to widened by applying `container-fluid`
    * list view to be come left side view
    * detail/edit view to be right side view
    * "back to list" button is invisible
    
1. when there is a id and width is below medium: 
    * list view is hidden
    * detail/edit view is full width
    * "back to list" button become visible
    
1. edit view on mobile
    * on mobile, detail view doesn't show an "edit" button 
    * list doesn't show "add" button on mobile
    * user can get edit view with url, the app does not stop user from using edit view on mobile, if they really wanted to.
    * detail and edit share the same router-outlet
    


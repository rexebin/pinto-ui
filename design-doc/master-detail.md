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
  

  Screen size below medium: 

  * list view is hidden and detail view is full width. 
  * edit is disabled and not allowed on these screen types.
  * user can click to return list view fom detail/edit view.
  

# Routes

1. `entity-name`: list view, full width
1. `entity-name/:id`:
  * list view on the side, detail view on the right. 
  * list view is hidden on mobile. 
  * Detail view has button "back to list" that toggles to hide itself and show list view.
  * 
1. `entity-name/edit/:id`: 
  * user click "edit" button on detail view to get to this url.
  * list view on the side, edit view on the right.
  * when `id` is `-1`, create new entity. 
  * user click "add" button on the list view to create new entity by navigate to `entity-name/edit/-1`
  * successful save navigates back to `entity-name/:id`
  * on mobile, edit is not available. No "add" button on list view. No "edit" button on detail view. 

1. parent route is empty path and ListComponent, with child routes:
  * `'/:id'`, DetailComponent, outlet: 'detailEdit'
  * `'edit/:id'`, EditComponent, outlet: 'detailEdit'
  

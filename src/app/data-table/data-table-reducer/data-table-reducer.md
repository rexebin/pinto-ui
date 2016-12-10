
# States

DataTable state is a dictionary object of key-values:

1. key: entity name
1. value: list parameters.

The state maintains the following list parameters: 

1. sort by property name
1. sort order
1. current page
1. page size

# Actions

## Sort

1. Payload:
  * entity name
  * list parameters: sort by property name and sort order

When dispatched: 

1. if there is no existing list parameters for the given entity, create one with payload's properties
1. if there is an existing list parameters for the given entity, then update the sortby and order properties with new value in the payload.

## Page

1. payload: 
  * entity name
  * list parameters: current page and page size
  
when dispatched: 

1. if exists, update current page and page size properties with payload's properties
1. if does not exist, create one with payload's properties.

# usage: 

In Data table component, we subscribe to the state and fetch the list with the properties in the states.

If the states are absent, then use default values to fetch the list.

Dispatching actions to changing states would trigger new fetch list action.

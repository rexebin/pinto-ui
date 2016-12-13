# Data table

Data Table component is a dummy component for all entity lists:
1. it provides a array of items to list-view component
1. it includes search, sort and pagination components, which communicate with itself via TableFilterService
1. Data Table component is responsible to make sure the items supplied to list-view component is paged, sorted and filtered.
1. List-view component is only reponsible for handling displaying the items from Data Table component

## Search

Search function on the client side is pure and simple: 

pass the search text to the server and expect a new list of results.

The server decide how to search with the given text.

Client side search does have [these features](../form/search/search.md)

Other constraints:
1. respect pagination and sort preferences

### Appearance

1. search box is on the left hand size, top, under title.
1. search box is full width on mobile
 
## Sort
1. server's default sort column is set on fetching.
1. Clicking on table header to toggle asc-desc
1. pass a sort property string to server, expect server to return result.
1. when sorted, show up and down arrow on the header to indicate user which column is being sorted. 
1. respect search and pagination preferences

## Pagination

[pagination](./pagination/pagination.md)

## Column width

Maximum columns, subject to changes:
1. desktop: 6
1. tablet: 4
1. mobile: 2

## Click Item

Clicking item would navigate to `detail/:id`.

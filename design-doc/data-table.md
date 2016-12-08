# Data table

## Search

Search function on the client side is pure and simple: 

pass the search text to the server and expect a new list of results.

The server decide how to search with the given text.

Client side search does have [these features](../src/app/form/search/search.md)

Other constraints:
1. respect pagination and sort preferences

### Appearance

1. search box is on the left hand size, top, under title.
1. search box is full width on mobile
 
## Sort
1. server's default sort column is created time.
1. Clicking on table header to toggle asc-desc
1. pass a sort property string and a bool to indicate asc or desc to server, expect server to result result.
1. when sorted, show up and down arrow on the header to indicate user which column is being sorted. 
1. respect search and pagination preferences

## Pagination

1. pagination preferences goes to default settings: 
  * items size
1. pagination using ng-bootstrap pagination widget.
1. wrapped in a container
1. on mobile, item size controller is hidden


## Column width

Maximum columns, subject to changes:
1. desktop: 6
1. tablet: 4
1. mobile: 2

## Click Item

Clicking item would navigate to `detail/:id`.

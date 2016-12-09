
# Sortable Directive

Used to make data-table's header click-able and indicate sort status.

Behavior: 

1. clicking the host header emit sort event
1. clicking again would toggle sort order
1. shows an arrow icon on the right of header title, indicate the sort order
1. hide the icon if data is sorted by other column.

payload: 

1. sortby property name: api expect it it be match model's property name
1. sort order: 'asc' or 'desc'


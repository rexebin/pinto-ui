
# Data Table Service

This service is to used to maintain data table sort and pagination behaviors.

Each entity has its own sort and pagination behaviors. This service is to keep track of them all.

## Sort

1. sortBy: property name of entity used to sort the data
1. order: `asc` or `desc`, represents sort order.

## Page

1. page: current page number
1. pageSize: items number per page

# API

1. API users can call methods to set sort and pagination
1. Data-table component or other API users can subscript to service's observables to react on any changes

Observables: 

* filter: include both sort and pagination filtering properties.

Methods, all emit value to filter: 

1. page(page: number, pageSize: PageSize):void{}
  `PageSize: 10 | 20 | 30 | 50 | 100`  
  
1. sort(sortBy: string, order: Order):void{}
  `Order: 'asc' | 'desc'`
  
  




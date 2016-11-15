# Top Nav

## Goal

To abstract menu items to a set of arrays, so that it is easy to create and maintain menu items without touching the components.

## Menu model

source: primeng.

```
export interface MenuItem {
  label?: string; //item label
  icon?: string; 
  command?: (event?: any) => void; // callback excuted when clicked
  url?: string; // navigate to url when clicked
  routerLink?: any; // routerlink to route to when clicked
  eventEmitter?: EventEmitter<any>; 
  items?: MenuItem[];
  expanded?: boolean; // visiblility of sub-menu
  disabled?: boolean; 
}
```

1. Menu model would be array of MenuItem object.
1. Each object represents an item on the top-nav bar. 
  * it can have `items`, which makes it a drop-down
1. menu level should be maxed at one. i.e no sub-menu on drop-down menu items.

 
## Components

1. pt-top-nav: wrapper component to be used in app.component.html, assembles all pieces. 
1. pt-top-nav-sub: each item in the top-nav component, pre-presented by each object in the above model array i.e MenuItem.

## models

1. each function area gets a item slot in top-nav, with a dropdown list, item number is limited at 7
1. each function area's menu model has its own ts file to hold it.
1. menu models are joined in another const with `...` operator.
1. pt-top-nav component use the joined model.
1. pt-top-nav-sub receive MenuItem.



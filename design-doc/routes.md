# Routes

## Modules
The application has three large feature modules: 

1. occupancy (free)
1. finance
1. humanResource

EAch of above feature modules is made of many smaller modules. Each module has its own stand-alone and isolated routes.

The first routes would be the dashboard for the whole application.

Each module has its own dashboard. We will start with occupancy dashboard as the whole application's dashboard.

### Eager loaded modules

The application will go to dashboard first. Therefore, apart from core module and shared module, the only eager loaded module is the dashboard module.

We start with occupancy's dashboard.

### Lazy loaded routes

All other modules are lazy loaded with pre-load enabled.

## Routes

app-routing.module.ts: 

1. redirect `/` to `/dashboard`
1. has following routes, all lazy loaded: 
 * `/serviceuser`
 * `/finance`
 * `/hr`
 
 

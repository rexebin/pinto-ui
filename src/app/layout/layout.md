# Screen width

1. Middle: Content in the middle with white space around 200px left and right, shrinks and grows on screen width changes.

  * when there is no left side task/list panel
  * when content does not require full width of the screen.
  
  Bootstrap class: .container
  
1. Full: content uses full width of the screen, padding: left and right: around 20px
 
  * when content require full width of the screen
  * when there is a left panel for tasks or item list
  
  Bootstrap class: .container-fluid

# Layout

## Site Menu

There is only one site menu: top nav bar, for: 

1. height: 55px, 
1. width: full width, with padding 20px or 200 px. no top padding or margin.

Content: 

1. brand and logo
1. navigation to all feature areas
1. messages and alerts
1. status - login / logout

Top nav bar will be hidden under Electron mode, replaced with Electron menu.

## Title bar

Title bar is under site menu:
 
 1. height: 55px
 1. width: full, padding: 20px or 200 px depending on screen width. 
 1. no top margin

Content

 1. left side: content title / breadcrumbs
 1. right side: actions or important status/messages

## Main Content

### Left panel

Left panel is optional. Use left panel in the following scenarios: 
 
 1. Master detail screen: item list
 1. Common Actions for the content
 
Size and visibility: 

 1. width: 200px
 2. height: full height of the main content
 3. hidden but toggleable on mobile.
 
### Main content panel
 
This is where the main content goes, it has: 

1. optional tabs for multiple actions and functions.
1. content area

## Footer

Fixed menu about the company, copyright, support, contact, terms etc.


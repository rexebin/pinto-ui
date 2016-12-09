
# Container Switcher directive

This directive adds `container` or `container-fluid` class to host element.
 
1. by default, adds class `container`
1. when `Container` changes states, add correct class to the host element
1. anywhere dispatch action will change classes to all host elements.

It is designed to allow component to toggle content width between centered and widened. 

for example, on master detail screen with list and detail views, screen should be widened.

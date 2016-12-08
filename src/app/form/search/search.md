

# Search Component Requirement

## Emit search event, when:
1. on user input, debounce 1000ms by default before emit search event automatically
1. hitting Enter key emits search event immediately without debounce
1. clicking search icon emits search event immediately without debounce

## Other features:
1. hitting escape key clear search box value
1. debounce time can be specified
1. does not emit search event with same value more than once in a row

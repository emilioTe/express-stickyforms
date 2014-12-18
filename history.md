### 2.0.0 / december 18th, 2014
* Created `history.md` to keep track of changes
* Fixed bug that was causing a redirect loop
* Changed how you `require` the module to a more standard approach
* Changed how you call `sticky`
```javascript
// previous
req.sticky();

// current
req.sticky.them();
```
* Added convenience method (`sticky.get()`) to retrieve a "stickied" value


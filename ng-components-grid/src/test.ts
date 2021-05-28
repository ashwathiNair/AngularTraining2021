import 'jest-preset-angular';

Object.defineProperty(window,  'CSS', {value:null});

Object.defineProperty(document, 'doctype', {
  value: '<!doctype html>'
});

Object.defineProperty(document.body.style, 'transform', {
  value:()=>{
    return {
      enumerable:true, // monitor any DOM changes with enumeration on it and modifying DOM updates
      configurable:true // allow the binding to execute in memory so that element will change
    }
  }
});
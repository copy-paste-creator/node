function sayHello(name) {
  console.log("Hello" + name);
}
sayHello("SKC");

setTimeout();
clearTimeout();

setInterval();
clearInterval();
var message = " "; // not added to global
global.console.log();
global.setTimeout();

// generally variables & functions are added to global scope 'window'
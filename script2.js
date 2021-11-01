var msg = "This message is defined Globally";
console.log("global:message = "+msg);

var a=function () {
 var msg = "This message is defined inside a";
 console.log("a: message = " +msg);

 b();
}

function b() {

console.log ("b: message = "+msg);
}
a();
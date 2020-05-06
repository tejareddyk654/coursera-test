(function(window){
var SayHello={};
SayHello.name=name;
var speakWord = "Hello";
SayHello.speak=function (name) {
  console.log(speakWord + " " +SayHello.name);
}
window.SayHello=SayHello;
})(window);

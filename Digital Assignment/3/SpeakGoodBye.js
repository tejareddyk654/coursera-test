(function(window){
 var SayBye={};
 SayBye.name=name;
var speakWord = "Good Bye";
SayBye.speak=function (name) {
  console.log(speakWord + " " +SayBye.name);
}
 window.SayBye=SayBye;
})(window);

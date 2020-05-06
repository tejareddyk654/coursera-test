(function(){
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0; i<names.length; i++) {
  var name=names[i];
   var tempo=names[i].toLowerCase();
   var temp=tempo.charAt(0);
   //console.log(temp);
  if (temp=='j') {
       SayBye.name=name;
       SayBye.speak(name);
  } 
  else {
    SayHello.name=name;
    SayHello.speak(name);
  }
}
})();
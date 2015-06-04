var lastCommand;
function exec(){
  command = $(".dd-title.d-dialog-title").first().text()
  if(lastCommand != command){
    $.get("http://localhost:8081/command?q="+command)
    lastCommand = command;
  }

};
$(document).ajaxComplete(exec);
var timeout = 0;
var waitForContainer = function(){
   var c = document.querySelectorAll(".inf-container")[0];
   if(c) {
   clearInterval(timeout);
   	c.addEventListener ("DOMSubtreeModified", function(evt){
		console.log(evt.target);
		exec();
   	}, true);
   }
}
timeout = setInterval(waitForContainer, 1000);

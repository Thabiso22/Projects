alert($);
button.addEventListener("click", function() {
  var textbox=document.getElementById('textbox');
  var button=document.getElementById('button');
  var display=document.getElementById('display');
  var typedInfo=textbox.value;


display.innerHTML= typedInfo;
});

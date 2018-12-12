var i=0;

function increment(){
i+=1;
}

function textareaFunction(){
var r = document.createElement('span');
var y = document.createElement("TEXTAREA");
var g = document.createElement("button");
y.setAttribute("cols",100);
y.setAttribute("rows",4);
y.setAttribute("placeholder","Work Experience");
increment();
r.appendChild(y);
g.setAttribute("onclick", "removeElement('myForm','id_"+i+"')");
r.appendChild(g);
r.setAttribute("id","id_"+i);
document.getElementById("myForm").appendChild(r);
return false;
}
function removeElement(parentDiv, childDiv){
if(childDiv == parentDiv)
alert("Element cannot be removed!");
else if(document.getElementById(childDiv)){
var child = document.getElementById(childDiv);
var parent = document.getElementById(parentDiv);
parent.removeChild(child);
}
else{
alert("Element has already been removed or doesn't exist!");
}
} 


var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var hide = document.querySelector(".hide");
var arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function(){
   hide.style.visibility = "visible";
   arrowIcon.classList.toggle("rotate");
}

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
        hide.style.visibility = "hidden";
        arrowIcon.classList.toggle("rotate");
    }
}


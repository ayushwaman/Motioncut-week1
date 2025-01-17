let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtn.onclick = function(){
    //rotate icon of dropdown list
    if (list.classList.contains("show")) {
        icon.style.rotate = "0deg";
    }else{
       icon.style.rotate = "-180deg";
    }
    list.classList.toggle("show");
    
}

//hide dropdown list when clicked outside dropdown btn
window.onclick = function (e){
    if (e.target.id !== "drop-text" &&
        e.target.id !== "span" &&
        e.target.id !== "icon") {
            list.classList.remove("show");
            icon.style.rotate = "0deg";
    }
}

for(item of listItems){
    item.onclick = function (e){
        //change the dropdown btn text on click on selected list item
        span.innerText = e.target.innerText;

        //change the placeholder text of search bar
        if(e.target.innerText == "Everything"){
            input.placeholder = "Search Anything...";
        }else{
            input.placeholder = "Search in " + e.target.innerText + "...";
        }  
    }
}
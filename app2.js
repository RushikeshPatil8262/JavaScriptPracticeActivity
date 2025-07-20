let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value ;

    let delBtn = document.createElement("button"); // To create the delete button
    delBtn.innerText = "delete";                   
    delBtn.classList.add("delete");                //

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

// Bubbling Event
ul.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON") { // To activate delete button
        let listItem = event.target.parentElement; // To delete the whole item
        listItem.remove();  
        console.log("Deleted");
    }
}); 
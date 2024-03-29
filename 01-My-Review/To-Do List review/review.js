const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask(){
    // Checks if input is empty, then gives notification
    if(inputBox.value === ''){
        alert("You need to write a task.");
    }
    else{
        // Pushes text into list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Clears the input 
    inputBox.value = "";
    saveData();
}

// functionality of click on task

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    
    // Saving unchecked tasks
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()
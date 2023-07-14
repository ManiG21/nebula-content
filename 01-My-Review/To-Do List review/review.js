const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask(){
    // Checks if input is empty
    if(inputBox.value === ''){
        alert("You need to write a task.");
    }
    else{
        // Pushes txt into list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
    }
    // Clears the input 
    inputBox.value = ""
}
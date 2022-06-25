let toDoList = document.getElementById('To-Do-List')
let toDoForm = document.getElementById('To-Do-Form')
let toDoInput = document.getElementById('To-Do-Input')

form.addEventListener('Submit', addNewItems)

function addNewItems(e) {
    e.preventDefault()
    let newDo = document.createElement('li')
    newDo.innerText = e.target.toDoInput.value
    toDoList.appendChild(newDo)
    console.log(newDo, e.target)
}
let listItem = document.querySelector('li')
toDoList.addEventListener('click', function(e){
    console.log(e.target)
    e.target.style.textDecoration = 'line-through'
})

toDoList.addEventListener('dbleclick', function(e){
    e.target.remove()
})
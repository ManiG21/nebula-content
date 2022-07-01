const ex = document.getElementById('ex1')
function example() {
    return new Promise( (resolve, reject) =>
    {
       setTimeout( () => {
        if (ex.innerHTML){
           resolve(ex.innerHTML = "I got the answer!");
           }else {
            reject('its wrong')
           }
       }, 5000)
    })
}
let textPromise = example(true)
textPromise.then(success => console.log
(success)).catch(error => console.log(error))


const button = document.getElementById('btn')

function changeButton() {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            if(button.style.backgroundColor){
                res(button.style.backgroundColor = "red")
            } else {
                rej(button.style.backgroundColor = "yellow")
            }
        }, 5000)
    })
}
let buttonPromise = changeButton(false)
buttonPromise.then(success => console.log(success)).catch(error => console.log(error))
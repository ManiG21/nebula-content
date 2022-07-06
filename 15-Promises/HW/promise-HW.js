// 6.   Using HTML & CSS, write a promise that, after 5 seconds changes the existing text on the web-page
const h2 = document.getElementById('hi')
function changeText() {
    return new Promise( (resolve, reject) =>
    {
       setTimeout( () => {
        if (h2.innerHTML){
           resolve(h2.innerHTML = "I've changed!");
           }else {
            reject('Error')
           }
       }, 5000)
    })
}
let textPromise = changeText(true)
textPromise.then(success => console.log
(success)).catch(error => console.log(error))


const button = document.getElementById('btn')

function changButton() {
    return new Promise( (res, rej) => {
        setTimeout( () => {
            if(button.style.backgroundColor){
                res(button.style.backgroundColor = "yellow")
            } else {
                rej(button.style.backgroundColor = "black")
            }
        }, 5000)
    })
}
let buttonPromise = changeButton(false)
buttonPromise.then(success => console.log(success)).catch(error => console.log(error))
// // 7. What is the output of the following code?
// const promise = new Promise(res => res(2));
// promise.then(v => {
//     console.log(v);
//     return v * 2;
// })
// .then(v => {
//     console.log(v);
//     return v * 2;
// })
// .then(v => {
//     console.log(v);
//     return v * 2;
// })
// .finally(v => {
//     console.log(v)
// })

// 2
// 4

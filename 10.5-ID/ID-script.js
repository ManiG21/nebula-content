const container = document.querySelector(".container");
const form = document.querySelector('#form');

let fname = document.querySelector('#fname')
let dob = document.querySelector('#dob')
let address = document.querySelector('#address')
let company = document.querySelector('#company')

form.addEventListener("submit", function (event){
    event.preventDefault()
    const idCard = document.createElement ('div');
    container.appendChild(idCard)
    const image = document.createElement('div')
    idCard.appendChild(image)

    const nameEl =  document.createElement('h5')
    idCard.appendChild(nameEl)
    const dobEl = document.createElement('p')
    idCard.appendChild(dobEl)
    const addressEl =  document.createElement('p')
    idCard.appendChild(addressEl)
    const companyEl =  document.createElement('p')
    idCard.appendChild(companyEl)
nameEl.innerText =`Name: ${fname.value}` 
dobEl.innerText =`Dob: ${dob.value}`
addressEl.innerText =`address: ${address.value}`
companyEl.innerText =`company: ${company.value}`

nameEl.setAttribute('id', 'form-name')
idCard.classList.add('id-card')
container.classList.add('id-container')
image.classList.add('image')


form.reset()
})
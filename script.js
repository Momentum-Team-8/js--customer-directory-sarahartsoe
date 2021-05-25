

// let customerName = customers.forEach(customer) => 
// customer.name("first")

// function renderName(name) {
//     nameHeading.innerHTML = name.first
// }

// customers.forEach.name => {
//     document.getElementById("allcustomers")
//     renderName
// }


// function renderName(array) {
//     const nameHeading = document.createElement("h2")
//     for (let item of array) {
//         nameHeading.innerText = customers.name.first;
//         document.getElementById("output").appendChild(nameHeading)
//     }
// }

// sailorScouts is customers for me

let customerImages = customers.map((customer) => customer.picture.large)
let customerFirstNames = customers.map((customer) => customer.name.first)
let customerLastNames = customers.map((customer) => customer.name.last)

function renderImages(arr) {
    arr.forEach(image => {
        let pic = document.createElement("img")
        pic.src = image
        document.getElementById("container").appendChild(pic)
    })
}
renderImages(customerImages)
function renderNames(arr) {
    arr.forEach(name => {
        let h2 = document.createElement("h2")
        h2.innerText = name;
        document.getElementById("container").appendChild(h2)
    });
}
renderNames(customerFirstNames)
function renderLastName(arr) {
    arr.forEach(name => {
        let h2 =document.createElement("h2")
        h2.innerText = name;
        document.getElementById("container").appendChild(h2)
    });
}
renderLastName(customerLastNames)


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

// let customerImages = customers.map((customer) => customer.picture.large)
// let customerFirstNames = customers.map((customer) => customer.name.first)
// let customerLastNames = customers.map((customer) => customer.name.last)

// function renderImages(arr) {
//     arr.forEach(image => {
//         let pic = document.createElement("img")
//         pic.src = image
//         document.getElementById("container").appendChild(pic)
//     })
// }
// renderImages(customerImages)
// function renderNames(arr) {
//     arr.forEach(name => {
//         let h2 = document.createElement("h2")
//         h2.innerText = name;
//         document.getElementById("container").appendChild(h2)
//     });
// }
// renderNames(customerFirstNames)
// function renderLastName(arr) {
//     arr.forEach(name => {
//         let h2 =document.createElement("h2")
//         h2.innerText = name;
//         document.getElementById("container").appendChild(h2)
//     });
// }
// renderLastName(customerLastNames)

// Take one customer object out of the array. Save it in a variable. Can you get the name of that customer out of that one object? Cool. Now, can you take that name and put it in an element in the DOM? If you get that, move on to the next piece of data. Bit by bit!
// Once you can make one complete customer, you can modify your code to put that into a loop and do it on repeat for each object in the array.

// let fullname = name {
//     title: 'dr',
//     first: 'sophia',
//     last: 'burns'
//   },

const customer = customers[0];

const insertionPoint = document.querySelector("#output");

// const customerCard = document.createElement("div");

// customerCard.classList.add("customer-card");
// insertionPoint.appendChild(customerCard);
// console.log(customerCard);
// const customerName = customer.name.first + " " + customer.name.last;
// customerCard.innerHTML = `<h2>${customerName}</h2>`;

// const customerImg = document.createElement("img");
// customerImg.src = customer.picture.large;
// customerCard.appendChild(customerImg);
// // debugged "Uncaught TypeError: Cannot read property 'first' of undefined" and got my name to appear! that's a win!

// const emailEl = document.createElement("p");
// emailEl.innerText = customer.email;
// customerCard.appendChild(emailEl);

for (let customer of customers) {
  const customerCard = document.createElement("div");
  customerCard.classList.add("customer-card");
  insertionPoint.appendChild(customerCard);
  console.log(customerCard);
  const customerName = customer.name.first + " " + customer.name.last;
  customerCard.innerHTML = `<h2>${customerName}</h2>`;

  const customerImg = document.createElement("img");
  customerImg.src = customer.picture.large;
  customerCard.appendChild(customerImg);
  // debugged "Uncaught TypeError: Cannot read property 'first' of undefined" and got my name to appear! that's a win!

  const emailEl = document.createElement("p");
  emailEl.innerText = customer.email;
  customerCard.appendChild(emailEl);
}

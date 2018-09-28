let container = document.querySelector(".container");
let main = document.querySelector(".main");

let header = document.createElement("header");
let h1 = document.createElement('h1');
let h1Text = document.createTextNode('Random Users');

header.append(h1);
h1.append(h1Text);

container.append(header);



fetch('https://randomuser.me/api/?results=12')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {

    let eachUser= ""

    for(i=0;i < data.results.length; i++){

      eachUser += `<div>
      <img src=${data.results[i].picture.large} width='250'>
      <h4>${data.results[i].name.first} ${data.results[i].name.last}</h4>
      <h5>${data.results[i].email}</h5>
      <br>
      <p>${data.results[i].location.street} ${data.results[i].location.city}
      ${data.results[i].location.state} ${data.results[i].location.postcode}</p>
      <p>${data.results[i].phone}</p>
      </div>`

    }
    main.innerHTML = eachUser;

  })

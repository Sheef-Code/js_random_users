let container = document.querySelector(".container");






fetch('https://randomuser.me/api/')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {

    for(i=0;i < data.results.length; i++){
      console.log(data.results[i]);
    }

  })

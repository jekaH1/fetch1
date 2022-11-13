let place = document.querySelector(".container .row")

axios.get("https://restcountries.com/v3.1/all")
    .then(res => {
        console.log(res);
        for (let i = 0; i < res.data.length; i++)
            place.innerHTML += `<div class="col-3  ">
            <div class="card" style="width: 18rem;">
            <img src="${res.data[i].flags.png}" class="card-img-top" alt="..." style="height: 10rem;">
                <div class="card-body">
                    <h5 class="card-title">${res.data[i].name.common}, ${res.data[i].capital}</h5>
                   
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Region: ${res.data[i].region}</li>
                    <li class="list-group-item">Sub Region: ${res.data[i].subregion}</li>
                    <li class="list-group-item">Area: ${res.data[i].area}</li>
                </ul>
                <div class="card-body">
                    <a class="btn btn-primary" target="_blank" href="${res.data[i].maps.googleMaps}" role="button">Maps</a>
                </div>
            </div>
        </div>`
    })
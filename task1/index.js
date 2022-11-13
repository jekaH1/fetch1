let place = document.querySelector(".container .row")
let button = document.getElementById("button")
axios.get("https://api.tvmaze.com/shows")
    .then(res => {
        console.log(res);

        for (i = 0; i < res.data.length; i++) {
            place.innerHTML += `<div class="col-3">
            <div class="card" style="width: 18rem;">
                <img src="${res.data[i].image.medium}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${res.data[i].name}</h5>
                    <p class="card-text">Premiere: ${res.data[i].premiered}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">IMDB rating: ${res.data[i].rating.average}</li>
                    <li class="list-group-item">Genre: ${res.data[i].genres[1]} </li>
                    <li class="list-group-item">Language: ${res.data[i].language}</li>
                </ul>
                <div class="card-body">
                    <a class="btn btn-primary" target="_blank" href="${res.data[i].officialSite}" role="button">Go to website</a>
                    <a class="btn btn-success" id="btn" target="_blank" href="index2.html" role="button">Go to detail</a>
                </div>
            </div>`

        }
    })



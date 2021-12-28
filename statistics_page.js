var key = config.API_KEY;

// https://stackoverflow.com/a/2901298
function commaSeparate(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// https://rapidapi.com/Gramzivi/api/covid-19-data/
function fetchData() {
    fetch("https://covid-19-data.p.rapidapi.com/totals", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": key
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById("cases-value").innerHTML = commaSeparate(data[0].confirmed);
        document.getElementById("deaths-value").innerHTML = commaSeparate(data[0].deaths);
        document.getElementById("recovered-value").innerHTML = commaSeparate(data[0].recovered);
    })
}

fetchData();
function fetchBrazil() {
    fetch('https://restcountries.com/v3.1/name/brazil') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch item description');
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("countryName").innerText = json[0].name.common;
            document.getElementById("countryRegion").innerText = json[0].region;
            document.getElementById("countryCapital").innerText = json[0].capital[0];
            document.getElementById("countryPopulation").innerText = json[0].population;
            document.getElementById('itemModal').style.display = 'block';
        })
        .catch(error => {
            console.error(error);
        });
}

function fetchCanada() {
    fetch('https://restcountries.com/v3.1/name/canada')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch item description');
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("countryName").innerText = json[0].name.common;
            document.getElementById("countryRegion").innerText = json[0].region;
            document.getElementById("countryCapital").innerText = json[0].capital[0];
            document.getElementById("countryPopulation").innerText = json[0].population;
            document.getElementById('itemModal').style.display = 'block';
        })
        .catch(error => {
            console.error(error);
        });
}

function fetchFrance() {
    fetch('https://restcountries.com/v3.1/name/france') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch item description');
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("countryName").innerText = json[0].name.common;
            document.getElementById("countryRegion").innerText = json[0].region;
            document.getElementById("countryCapital").innerText = json[0].capital[0];
            document.getElementById("countryPopulation").innerText = json[0].population;
            document.getElementById('itemModal').style.display = 'block';
        })
        .catch(error => {
            console.error(error);
        });
}


function fetchAngola() {
    fetch('https://restcountries.com/v3.1/name/angola') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch item description');
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("countryName").innerText = json[0].name.common;
            document.getElementById("countryRegion").innerText = json[0].region;
            document.getElementById("countryCapital").innerText = json[0].capital[0];
            document.getElementById("countryPopulation").innerText = json[0].population;
            document.getElementById('itemModal').style.display = 'block';
        })
        .catch(error => {
            console.error(error);
        });
}

function fetchRussia() {
    fetch('https://restcountries.com/v3.1/name/russia') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch item description');
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("countryName").innerText = json[0].name.common;
            document.getElementById("countryRegion").innerText = json[0].region;
            document.getElementById("countryCapital").innerText = json[0].capital[0];
            document.getElementById("countryPopulation").innerText = json[0].population;
            document.getElementById('itemModal').style.display = 'block';
        })
        .catch(error => {
            console.error(error);
        });
}

function fetchJapan() {
    fetch('https://restcountries.com/v3.1/name/japan') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch item description');
            }
            return response.json();
        })
        .then(json => {
            document.getElementById("countryName").innerText = json[0].name.common;
            document.getElementById("countryRegion").innerText = json[0].region;
            document.getElementById("countryCapital").innerText = json[0].capital[0];
            document.getElementById("countryPopulation").innerText = json[0].population;
            document.getElementById('itemModal').style.display = 'block';
        })
        .catch(error => {
            console.error(error);
        });
}

function closeItemModal() {
    document.getElementById('itemModal').style.display = 'none';
}

document.getElementById('getBrazil').addEventListener('click', function() {
    fetchBrazil('brazil');
});

document.getElementById('getCanada').addEventListener('click', function() {
    fetchCanada('canada');
});

document.getElementById('getFrance').addEventListener('click', function() {
    fetchFrance('france');
});

document.getElementById('getAngola').addEventListener('click', function() {
    fetchAngola('angola');
});
document.getElementById('getRussia').addEventListener('click', function() {
    fetchRussia('russia');
});

document.getElementById('getJapan').addEventListener('click', function() {
    fetchJapan('japan');
});

document.addEventListener('DOMContentLoaded', function() {
    closeItemModal();
});
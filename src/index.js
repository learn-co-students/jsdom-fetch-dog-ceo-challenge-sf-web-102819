let breedContainer;
let breedFilter;

document.addEventListener("DOMContentLoaded", function () {
    breedContainer = document.getElementById("dog-breeds");
    breedFilter = document.getElementById("breed-dropdown");
    fetchDogImgs();
    fetchDogBreeds();
    dogFilter();
});

console.log("%c HI", "color: firebrick");

async function fetchDogImgs() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/4");
    const apiData = await response.json();
    apiData.message.map(img => {
        document.getElementById("dog-image-container").innerHTML += `<ul><img src="${img}" /></ul>`;
    });
}

let allDogBreeds = [];

async function fetchDogBreeds() {
    const responseTwo = await fetch("https://dog.ceo/api/breeds/list/all");
    const apiDataTwo = await responseTwo.json();
    // debugger
    for (const key in apiDataTwo.message) {
        breedContainer.innerHTML += `<ul class="dog-breed">${key}</ul>`;
        allDogBreeds.push(key);
    }

    breedContainer.addEventListener("click", function (event) {
        event.target.style.color = "green";
    });
}

// ***********************************************************
// //      breedFilter = document.getElementById("breed-dropdown");
// //      allDogBreeds = Array of all dog breeds (90)
// //      filteredArray = if (A)... all the (A) BreedTypes, etc etc
// ***********************************************************

function dogFilter() {
    breedFilter.addEventListener("change", function (event) {
        const filteredArray = allDogBreeds.filter(name =>
            name.startsWith(event.target.value)
        );

        breedContainer.innerHTML = "";
        filteredArray.map(name => {
            breedContainer.innerHTML += `<ul class="dog-breed">${name}</ul>`;
        });
    });
}

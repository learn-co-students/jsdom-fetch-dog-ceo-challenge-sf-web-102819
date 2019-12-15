var breedsList
var theirUl

document.addEventListener('DOMContentLoaded', () => {
    styleMe() ; renderImages() ; renderBreeds() ; breedDropdown() ;
} )

function styleMe() { // just style
    const title_world = document.querySelectorAll("h1")[0]
    title_world.style.cssText ="text-align:center; letter-spacing:10px;"
    const all_life = document.body ; all_life.style.cssText = "background:#eb4d4d; color: white";
}

function renderImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => loopImage(json)  )
}

function loopImage(json) { // being called by renderImage()
    for (let i = 0; i < json.message.length; i++) {
        let image_world = document.createElement("IMG")
        image_world.style.cssText = "padding-bottom:10px; width: 400px";

        const breakworld = document.createElement("BR")
        image_cont = document.getElementById("dog-image-container")
        image_cont.style.textAlign = "center";
        
        image_world.src = json.message[i]
        image_cont.append(image_world, breakworld)
    }
} 


function renderBreeds(json) { 
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    fetch(breedUrl)
    .then(resp2 => resp2.json())
    .then(json =>breedsLoop(json) )
}


function breedsLoop(json) { // being called by renderBreeds()
    breedsList = Object.keys(json.message)  // most important line of code
    
    for (let i = 0; i < breedsList.length; i++) {
         eachBreed = document.createElement("li")
        eachBreed.innerHTML = breedsList[i] // study this.

        theirUl = document.getElementById("dog-breeds") ; theirUl.append(eachBreed)
        eachBreed.addEventListener('click', (event) => { 
            eachBreed.style.color = "green"
        }
        )
    }
} 


function breedDropdown() { // being called by renderBreeds() via breedsLoop(json)
    const breedDropdown = document.getElementById("breed-dropdown")
    breedDropdown.addEventListener("change" , (event) => {
    theirUl.innerHTML = ""
        for (let i = 0; i < breedsList.length; i++) {
            if (event.target.value == breedsList[i][0]) {
                theirUl.append(breedsList[i],document.createElement("br") )
            } 
        } 
    }) 
}
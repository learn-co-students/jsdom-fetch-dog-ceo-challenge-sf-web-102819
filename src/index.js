let allDogs = []
let doggos = []
let breeds = []


// waiting for entire docuemnt to load
document.addEventListener('DOMContentLoaded', () => {
    // const imgUrl = "https://dog.ceo/api/breeds/image/random/4" //grabbing 4 random dogos
    // fetch(imgUrl)
    //     .then(res => res.json())
    //     .then(json => {
    //         allDogs = json.message //nested data structure - breeds are in the message part 
    //         for(i = 0; i < allDogs.length; i++) {
    //             let doggo = allDogs[i]
    //             doggos.push(renderDogImg(doggo))
    //         }
    //         let images = document.querySelector("#dog-image-container")
    //         images.innerHTML= doggos.join(',')
    //     });  
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then( json => {
        breeds = json.message
        for(const key in breeds) {
            let breed = document.createElement("li")
            breed.setAttribute("id", key)
            breed.innerHTML = key
            let list = document.querySelector("#dog-breeds")

            list.prepend(breed)
            allDogs.push(breed)
            breed.addEventListener("click", (event) => {
                if (breed.style.color != "blue")
                    breed.style.color = "blue"
                else
                    breed.style.color = "black" 
            })
            }
    })
    select = document.querySelector("select")
    select.addEventListener("change", () => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then( json => {
            let list = document.querySelector("#dog-breeds")
            list.innerHTML = null
            breeds = json.message
            for(const key in breeds) {
                if (key[0] == select.value)  {  
                    let breed = document.createElement("li")
                    breed.setAttribute("id", key)
                    breed.innerHTML = key
                    
                    list.append(breed)  
                }
                 }

        })}
    
    )})

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let listArray = [ ]

document.addEventListener('DOMContentLoaded', (event) => {
    // fetchDogData()
    fetchBreedData()
    chooseBreed()
    
});

function fetchDogData( ){
   fetch("https://dog.ceo/api/breeds/image/random/4")
   .then(response => response.json())
   .then(json => renderDogData(json) )
   
}

function renderDogData(json){
    let imgContainer = document.getElementById("dog-image-container")
   let dogArray = json.message
   for(i=0; i< dogArray.length; i++){
    let img = document.createElement("IMG")
    img.src = dogArray[i]
    imgContainer.append(img)
   }

}

function fetchBreedData(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => renderBreedData(json))
}

function renderBreedData(json){
    let ulElement = document.getElementById("dog-breeds")
    let breedArray = [ ]
    const dogBreeds = json.message;
   
    for(const breed in dogBreeds){
        breedArray.push(`${breed}`);
    }
    for(i = 0; i < breedArray.length; i++){
        let listElement = document.createElement("li")
        listElement.innerText = breedArray[i];
        listArray.push(listElement)
        ulElement.append(listElement)
        listElement.addEventListener("click", (event) => {
           event.preventDefault()
           let text =  event.target 
           if (text.style.color === "black"){
           text.style.color = "pink"
           } else {
            text.style.color = "black"}
           
           
        })

    
     } }

    function chooseBreed(){
        let ulElement = document.getElementById("dog-breeds")
        let select = document.getElementById("breed-dropdown")
       select.addEventListener("change", (event)=>{
         
        let value = event.target.value
        ulElement.innerHTML = null
            for(i = 0; i < listArray.length; i++){
            if (listArray[i].innerText[0] === value){
                
                 ulElement.appendChild(listArray[i])
            

         }
         

        }
    })}

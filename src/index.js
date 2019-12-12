console.log('%c HI', 'color: firebrick')
let dogContainter
document.addEventListener("DOMContentLoaded", () => {
  dogContainter = document.querySelector("#dog-image-container");
  getDogImgs();
})
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"; //=> returns a obj
// console.log(imgUrl);

const getDogImgs = () => {
  return fetch(imgUrl)
  .then(resp => resp.json())
  // return resp.json();
  .then(json => {
    console.log(json.message)
    // const arr = [...json.message]
    // console.log(arr.join(""))
    const ul = document.createElement("ul");
    dogContainter.append(ul)
    for(const imgLink of json.message) {
      const arr = []
      // debugger;
      arr.push(imgLink)
      const joinedArr = arr.join("")
      // console.log(joinedArr)
      const li = document.createElement("li");
      li.append(imgLink)
      ul.appendChild(li)
    // dogContainter.append(renderSingleImg(joinedArr))
  }
//     // const dogs = getDogImgs(imgUrl)
//     // console.log(dogs);
})
//   // .then(json) => {
//   //   console.log("hi")
//   // }
//   // .then(json => json)
}
const renderSingleImg = (link) => {
  return `<img src="${link}">`;
}

// const renderr = (link) => {
//   const li = document.createElement("li");
//   const image = document.createElement("img");

//   return image.src = link;
//   // li.
// }

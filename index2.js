console.log("%c HI", "color: firebrick");
let dogContainter;
document.addEventListener("DOMContentLoaded", () => {
  dogContainter = document.querySelector("#dog-image-container");
  getDogImgs();
});
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"; //=> returns a obj
// console.log(imgUrl);

const getDogImgs = () => {
  return (
    fetch(imgUrl)
      .then(resp => resp.json())
      // return resp.json();
      // .then(json => console.log(json))
      .then(
        json => {
          console.log(json.message);
          // const arr = [...json.message]
          // console.log(arr.join(""))
          //     for(const imgLink of json.message) {
          //       const arr = []
          //       // debugger;
          //       arr.push(imgLink)
          //       const wow = arr.join("")
          // dogContainter.append(renderSingleImg(wow))
          dogContainter.innerHTML = json.message
            .map(anything => renderSingleImg(anything))
            .join("");
          console.log(anything);
        }
        //     // const dogs = getDogImgs(imgUrl)
        //     // console.log(dogs);
      )
  );
};
//   // .then(json) => {
//   //   console.log("hi")
//   // }
//   // .then(json => json)
// }
const renderSingleImg = link => {
  return `
  <div>
  <img src="${link}">;
  </div>
  `;
};

// const renderr = (link) => {
//   const li = document.createElement("li");
//   const image = document.createElement("img");

//   return image.src = link;
//   // li.
// }


function Fetch(keyWordImages){

   return new Promise((res,rej)=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.unsplash.com/search/photos?page=1&query=${keyWordImages}&client_id=pTan4mXO1JqVG2kuQwyObj6lxV8Dih_l1_9uZZ_DYzQ`)

    xhr.onload = ()=> res(JSON.parse(xhr.response));

    xhr.onerror = ()=> rej('something went wrong!')
    xhr.send();
   })
}

let test= Fetch("Mountain")
  .then((data) => {
    console.log(data);
    return data.results;
  })
  .catch((data) => {
    return data;
  });


// refactor code


let input = document.querySelector("input");
let root = document.querySelector(".img");

function createUI(data) {
  root.innerHTML = "";
  data.forEach((eachImage) => {
    let image = document.createElement("img");
    image.classList.add('img-1')
    image.src = eachImage.urls.full;
    root.append(image);
  });
}
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    let input = event.target.value;
    console.log(input);
    let data = Fetch(event.target.value).then((data) =>{
        createUI(data.results);
    });
    console.log(`Data we have ${data.results}`)
    input.value = "";
  }
});


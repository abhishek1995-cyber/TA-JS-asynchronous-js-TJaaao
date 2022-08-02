let input = document.querySelector('input');
let container = document.querySelector('.img');

function createUI(data){
    container.innerHTML = "";
    data.forEach(elm=>{
        let img  = document.createElement('img');
        img.classList.add('created-img')
        img.src =  elm.urls.full;
        container.append(img);
    });
}

function handleChange(event){
    if(event.keyCode === 13 && event.target.value){
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${event.target.value}&client_id=pTan4mXO1JqVG2kuQwyObj6lxV8Dih_l1_9uZZ_DYzQ`)

        xhr.onload =function(){
            let userdata = (JSON.parse(xhr.response));
            createUI(userdata.results)
        }
        xhr.send();
        event.target.value = "";
    }
}

input.addEventListener("keyup",handleChange);


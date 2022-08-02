let input = document.querySelector('input');
let img = document.querySelector('.img');
let h1 = document.querySelector('h1');
let p = document . querySelector('p')
let followers = document.querySelector('.followers');
let following = document.querySelector('.following');
let img1 = document.querySelector('.img-1');
let reload = document.querySelector('button');


function createUI(data){

    img.src = data.avatar_url;
    h1.innerText = data.name;
    p.innerText = data.company;
    followers.innerText = `followers : ${data.followers}`
    following.innerText = `following : ${data.following}`
}


function handleChange(event){
    if(event.keyCode === 13){
        let xhr = new XMLHttpRequest();
        xhr.open('GET',`https://api.github.com/users/${event.target.value}`);
        xhr.onload = function(){
            let userdata  = JSON.parse(xhr.response);
            createUI(userdata)
        }
        xhr.onerror = function(){
            console.log('something went wrong ...')
        }
        xhr.send()
    }
}

input.addEventListener('keyup', handleChange)




reload.addEventListener('click',()=>{
    let xsr = new XMLHttpRequest();
    xsr.open('GET',`https://api.unsplash.com/photos/random/?client_id=xj_2hmAsNu2tqOdGk6j1l_01sQAucsRE-V0Dd2mbhrc`);
    xsr.onload = function(){
        let image = JSON.parse(xsr.response);
        img1.src = image.urls.small 
    }
    xsr.onerror = function(){
        console.log('something went wrong ...')
    }
    xsr.send()
})
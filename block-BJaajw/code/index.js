let select = document.querySelector('select');
// https://api.spaceflightnewsapi.net/v3/articles?_limit=30
let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`
let newselm = document.querySelector('.news-card');
let allnews = [];

function createUI(news){
    newselm.innerHTML = '';
    news.forEach(element => {
        let li = document.createElement('li');
        li.classList.add('li')
        let figure = document.createElement('figure')
        let image = document.createElement('img');
        image.classList.add('img')
        image.src = element.imageUrl;
        figure.append(image)
        let div = document.createElement('div');
        div.classList.add('content')
        let source = document.createElement('span');
        source.classList.add('source');
        source.innerText = element.newsSite;
        let h2 = document.createElement('h2');
        h2.innerText = element.title;
        let a = document.createElement('a');
        a.href = element.url
        let button = document.createElement('button');
        button.innerText = "Read More"
        a.append(button);
         div.append(source, h2, a);
         li.append(image,div);
         newselm.append(li)
    });
}

function displayOptions(sources){
    sources.forEach((source)=>{
        let option = document.createElement('option');
        option.innerText = source;
        option.value = source;
        select.append(option);
    })
}

fetch(url).then((res)=>{
    if(!res.ok){
        throw new Error('check your internet connection!');
    }
 return res.json();
}).then((data)=>{
  console.log(data)
  allnews = data
  createUI(data)
  let allSources = Array.from(new Set(data.map(n=> n.newsSite)));
  displayOptions(allSources)
}).catch((error)=>{
    console.log(error);
    return error;
})

select.addEventListener('change',(event)=> {
    let value = event.target.value.trim()
    let filterednews;
    if(value){
    filterednews = allnews.filter(n => n.newsSite === value);
    } else{
        filterednews = allnews;
    }
    createUI(filterednews)
})

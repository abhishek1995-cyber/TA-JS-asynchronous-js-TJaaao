- Create four promises that resolve after 1, 2, 3 and 4 seconds with a random value. Using `Promise.all` log the value of each promise that it resolved with.
```js
let one = new Promise((res,rej)=>{
  setTimeout(()=>{
     res(1000)
  },1000)
})
let two = new Promise((res,rej)=>{
  setTimeout(()=>{
     res(2000)
  },2000)
});
let three = new Promise((res,rej)=>{
  setTimeout(()=>{
     res(3000)
  },3000)
})
let four = new Promise((res,rej)=>{
  setTimeout(()=>{
     res(4000)
  },4000)
})

let allpromise = Promise.all([one,two,three,four]).then((res)=>{
  console.log(res)
})
```
- Create a list of 5 Github usernames in an array and using `Promise.all` get access to the data of each user from GitHub API. Log the number of followers of each user.
```js
const userName = ['abhishek1995-cyber','RahhulMandyal1','adityag8686','ravikr9102','vishalgoswami12']

let usersinfo = userName.map((user) => {
   return fetch(`https://api.github.com/users/${user}`)
   .then((res) => 
  //  console.log(res)
    res.json()
    )
})

Promise.all(users).then((data)=>{
  data.forEach((n)=>{
    console.log(n.followers)
  })
})
```

- Use `Promise.race` to see which API resolves faster from the given list of URLs. Log the object you get from the promise that is resolved faster.

  - https://random.dog/woof.json
  - https://aws.random.cat/meow
```js
  let firstApi = fetch('https://random.dog/woof.json')
  .then((data)=> {
    data.json()
    console.log(data)
  })
  

let secondApi = fetch('https://aws.random.cat/meow').then((data)=> data.json())
.then((data)=> console.log(data));
console.log(secondApi);
console.log(Promise.race([firstApi , secondApi]));
  ```

- Use `Promise.allSettled` to log the value of each promise from the given list of promises. And also check if `Promise.all` works with `one`, `two` and `three` or not

```js
const one = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Arya'), 1000)
);
const two = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Whoops!')), 2000)
);
const three = new Promise((resolve, reject) =>
  setTimeout(() => resolve('John'), 3000)
);

Promise.allSettled([one,two,three]).then((data)=> console.log(data))
Promise.all([one,two,three]).then((data)=> console.log(data))
```

- What will be the output of the following code snippet? How much time will it take for the promise to resolve?

```js
Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Arya'), 1000);
  }),
  'Sam',
  { name: 'John' },
]).then(console.log);
```

['Arya', 'Sam', {…}];


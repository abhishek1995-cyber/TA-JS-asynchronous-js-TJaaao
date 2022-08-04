1. Create a promise. Have it resolve with a value of `Promise Resolved!` in resolve after a delay of 1000ms, using `setTimeout`. Print the contents of the promise after it has been resolved by passing `console.log` to `.then`

```js
let promise = new Promise((res,rej)=>{
   setTimeout(()=>{
    res(`Promise Resolved!`)
   },1000) 
}).then((data)=> console.log(data))
```

2. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch`

```js
let promise = new Promise((res,rej)=>{
   setTimeout(()=>{
    rej(`Promise Rejected!`)
   },1000) 
}).catch((data)=> console.log(data))
```

3. Create another promise. Now have it reject with a value of `Rejected Promise!` without using `setTimeout`. Print the contents of the promise after it has been rejected by passing console.log to `.catch` and also use `.finally` to log message `Promise Settled!`.

```js
let promise = new Promise((res,rej)=>{
   setTimeout(()=>{
    res(`Rejected Promise!`)
   },1000) 
}).then((data)=> console.log(data)).finally(()=> console.log(`Promise Settled!`))
```

4. What will be the output of the code below.

```js
console.log('A');

// Asynchronous code finises in 0 seconds (Callback Queue)
setTimeout(() => console.log('B'), 0); // 

// A promise that resolves right away (Microtask Queue)
Promise.resolve().then(() => console.log('C'));

console.log('D');
```
 A
 D
 C
 B

5. Write a function named `wait` that accepts `time` in ms returns a promise. The promise gets resolved after given time.

```js
 function wait(time){
    return Promise.resolve(setTimeout(()=>{
        console.log('promise resolved')
    },time))
}
```

6. Do the following:

- Create a new promise
- Resolve with 21
- Use `.then` and return adding `10` to the value you will get as parameter
- Use `.then` and return adding `100` to the value you will get as parameter
- Use `.then` and check if the value you get is greater than `100` throw new error with any message
- Catch the error using `.catch`

```js
let promise  = new  Promise((res,rej)=>{
    res(21)
}).then((data)=> {
    return data + 100;
    }).then((data)=> {
        return data + 100;
        }).then((data)=> {
        if(data > 100) {
        throw new Error(`something went wrong`)
        }
        }).catch((data)=>{
                console.log(data)
        })

```

7. Do the following:

- Create a new promise
- Resolve the promise with `['A']`
- Use `.then` and concat `B` into the parameter and return
- Use `.then` and return and object like `{0: 'A', 1: 'B'}`
- Use `.then` and log the value

```js
let newpromise = new Promise((res,rej)=>{
    res(['A'])
}).then((data)=>{
    return data.concat("B")
}).then((data)=>{
  return data.reduce((acc,cv,index,)=>{
    acc[index] = cv
    return acc
   },{})
}).then((data)=> {console.log(data)})
```

8. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Chain `.then` on above and return `3` also check the value you get access to by logging
- Chain `.then` on above and return `4` also check the value you get access to by logging

```js
let first =  Promise.resolve(1);
first.then((data)=>{
    console.log(data);
    return 2;
}).then(data=>{
    console.log(data);
    return 3;
}).then(data=>{
    console.log(data);
    return 4;
})
```

9. Do the following:

- Create a new promise named `first` and resolve it with `1`
- Use `.then` on `first` and return `2` also check the value you get access to by logging
- Use `.then` on `first` and return `3` also check the value you get access to by logging
- Use `.then` on `first` and return `4` also check the value you get access to by logging

```js
let first =  Promise.resolve(1);
first.then((data)=>{
    console.log(data);
    return 2;
})
first.then(data=>{
    console.log(data);
    return 3;
})
first.then(data=>{
    console.log(data);
    return 4;
})
```

10. Try to understand the difference between the problem 8 and 9. Write your observation.

as we are using .then on promise named first in question 8 we are repeating .then and getting the parameter from their previous function while in question 9 we are taking paramater as 1 each time because we use .then seperately ;

11. Do the following

- Create a promise and resolve it with `John`
- Use `.then` and return another promise that resolves with `Arya`
- Use `.then` log the value you get access to and return another promise that resolves after 2000ms with value `Bran`
- Use `.then` to log the value

```js
let promise = new Promise(res=>{
    res('john')
}).then((data)=>{
    return Promise.resolve('Arya');
    
}).then((value)=>{
    return new Promise(resolve=>{
    setTimeout(()=>
        resolve('Bran')
    ,2000)
    })
}).then(
    console.log
)
```


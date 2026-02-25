//Code 01
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     console.log('Paper delivered to house 2')
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()

//Code 02
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(){
//     setTimeout(() => console.log('Paper delivered to house 2'), 3000)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo()
// houseThree()

//Code 03
// function houseOne(){
//     console.log('Paper delivered to house 1')
// }
// function houseTwo(callback){
//     setTimeout(() => { // setTimeout becomes async and is handed over to the browser API or Node.js to handle, which in this case sets a timeout of 3 seconds...
//         console.log('Paper delivered to house 2') // before executing this console.log
//         callback() // immediately followed by this callback which is the houseThree console.log
//     }, 3000)
// }
// function houseThree(){
//     console.log('Paper delivered to house 3')
// }
// houseOne()
// houseTwo(houseThree) // houseTwo accepts a callback function as an argument, which is a higher order function 

//Code 04
// function houseOne(){
//     setTimeout(() => {
//         console.log('Paper delivered to house 1')
//         setTimeout(() => {
//             console.log('Paper delivered to house 2')
//             setTimeout(() => {
//                 console.log('Paper delivered to house 3')
//             }, 3000)
//         }, 4000)
//     }, 5000)
// }
// houseOne() // you can nest all these setTimeout functions but it's messy

//Code 05
// const promise = new Promise((resolve, reject) => { // a Promise object has an executor function that receives two functions when the promise is created (resolve and reject)
//     const error = false
//     if(!error){ // in other words, if true
//         resolve('Promise has been fulfilled') // do this
//     }else{
//         reject('Error: Operation has failed')
//     }
// })
// console.log(promise)
// promise
//     .then(data => console.log(data)) // these are called promise handlers, and are microtasks which run after sync lines finish. they wait for the promise to resolve and then execute the callback.
//     .catch(err => console.log(err)) // same for this, except it executes the error callback, which in this case console logs 'Error: Operation has failed'.

// //Code 06
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 1')
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 2')
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Paper delivered to house 3')
//         }, 2000)
//     })
// }
// houseOne()
//     .then(data => console.log(data)) // needed if you want to show the console log but not needed for the chain which relies on returned promises instead 
//     .then(houseTwo) // returns a promise 
//     .then(data => console.log(data))
//     .then(houseThree) // returns a promise
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

//Code 07
// function houseOne(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error = false
//             if(!error){ // if error is false, then !error is true
//                 resolve('Promise fulfilled: Paper delivered to house 1') // do this
//             }else{
//                 reject('Error: Operation has failed')
//             }
//         }, 1000)
//     })
// }
// function houseTwo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error = false
//             if(!error){ // if error is false, then !error is true
//                 resolve('Promise fulfilled: Paper delivered to house 2') // do this
//             }else{
//                 reject('Error: Operation has failed')
//             }
//         }, 5000)
//     })
// }
// function houseThree(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error = false
//             if(!error){ // if error is false, then !error is true
//                 resolve('Promise fulfilled: Paper delivered to house 3') // do this
//             }else{
//                 reject('Error: Operation has failed')
//             }
//         }, 2000)
//     })
// }

// async function getPaid(){ 
//     try {
//         const houseOneWait = await houseOne() // houseOne() starts its 1s timer and returns a pending Promise, await pauses inside getPaid until that promise resolves,
//         console.log(houseOneWait) // after ~1s, houseOneWait becomes: "Promise fulfilled: Paper delivered to house 1"

//         const houseTwoWait = await houseTwo() // houseTwo() doesn’t start until houseOne() resolves (because you call it after the first await)
//         console.log(houseTwoWait)

//         const houseThreeWait = await houseThree()
//         console.log(houseThreeWait)
        
//     } catch (err) { // try/catch will catch any rejection from any awaited promise
//         console.log(err)
//     }
// }

// getPaid() // it’s an async function, so it returns a Promise immediately when called (even though you don’t use it)

//Code 08
async function getACuteDogPhoto(){
    try {
        const res = await fetch('https://dog.ceo/api/breeds/image/random')

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`)
        }

        const data = await res.json()

        console.log(data)
        console.log("That's a great success for the doggos!")

        const img = document.createElement("img")
        img.src = data.message
        img.alt = "A very good dog"

        const container = document.getElementById("dogContainer")
        container.appendChild(img)

    } catch (err) {
        console.log("Error:", err)
    }
}
getACuteDogPhoto()

//Code 09, a version where Code 08 can has house functions that can all reject individually and decide whether to move on

function houseOne(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = Math.random() < 0.4
      if(!error){
        resolve('House 1 success')
      } else {
        reject('House 1 failed')
      }
    }, 1000)
  })
}

function houseTwo(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = Math.random() < 0.4
      if(!error){
        resolve('House 2 success')
      } else {
        reject('House 2 failed')
      }
    }, 1000)
  })
}

function houseThree(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = Math.random() < 0.4
      if(!error){
        resolve('House 3 success')
      } else {
        reject('House 3 failed')
      }
    }, 2000)
  })
}

async function getPaid(){ 
  try {
    const result1 = await houseOne()
    console.log(result1)
  } catch (err) {
    console.log("Error at house 1:", err)
  }

  try {
    const result2 = await houseTwo()
    console.log(result2)
  } catch (err) {
    console.log("Error at house 2:", err)
  }

  try {
    const result3 = await houseThree()
    console.log(result3)
  } catch (err) {
    console.log("Error at house 3:", err)
  }

  console.log("Finished attempting all houses")
}

getPaid()
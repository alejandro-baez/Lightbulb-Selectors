// Write your code here

const lightbulbs = document.querySelectorAll(".lightbulb")


let title = document.querySelector(".subtitle")

let count = 0;

lightbulbs.forEach( (lightbulb) =>  {
    lightbulb.addEventListener("click", ()=>{
        count++
        console.log(count)
        title.innerHTML = `You've clicked the lights ${count} times`
        lightbulb.classList.toggle("active")
    })
})


// const lightbulb1 = document.querySelector("#lightbulb1")
// const lightbulb2= document.querySelector("#lightbulb2")
// const lightbulb3 = document.querySelector("#lightbulb3")


// let title = document.querySelector(".subtitle")

// let count = 0;

// lightbulb1.addEventListener("click", function(){
//     count++
//     title.innerHTML = `You've clicked the lights ${count} times`
//     console.log(count)
//     lightbulb1.classList.toggle("active")
// })

// lightbulb2.addEventListener("click", function(){
//     count++
//     title.innerHTML = `You've clicked the lights ${count} times`
//     console.log(count)
//     lightbulb2.classList.toggle("active")
// })

// lightbulb3.addEventListener("click", function(){
//     count++
//     title.innerHTML = `You've clicked the lights ${count} times`
//     console.log(count)
//     lightbulb3.classList.toggle("active")
// })


// console.log("Start");

// setTimeout( function () {   //API  function he normal    
//     console.log("mid")
// }, 1000);

// console.log("end")

//call back yani  function ke undr function ,dependent  he

// function main(msg,newfn){
//     if(msg==='evening'){
//         evening(newfn)
//     }
//     else if (msg==='morning'){
//         morning(newfn)
//     }
//     else{
//         night(newfn)
//     }
// }


// function evening(newfn){
//     alert("Good Evenung")
//     newfn();
// }

// function night(newfn){
//     alert("Good night")
//     newfn();
// }function morning(newfn){
//     alert("Good Morning")
//     newfn();
// }

// function newfn (){
//     alert("Hello")
// }

// main('evening',newfn)

//ab ye  bhot gichpich hogai yani "callback hell " to is keliye is  ke liye  promisis uese krege


//ab promix

// const likeAPI = () => {
//     return ((Math.random() * 1).toFixed(0)) == 0 ? true : false;
// };

// const successfunction=()=>{
//     console.log("Success");
// }

// const failurefunction = () => {
//     console.log("failure");
// }

// const result = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         likeAPI() ? resolve() : reject()
//     }, 2000);
// });

// result.then(successfunction).catch(failurefunction);
//hm tree bna sakte he then ko leke
// result.then(() => {
//     console.log("resolve")
//     return 2;
// })
// .then((val) => {
//         console.log(val)
//         return val+2;
// }
// )

// .then((val2) => {
//     console.log(val2)
// }
// )
//     .catch(failurefunction);

// console.log("Hello")


function fetchAPI() {
    let promis = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("data");
        }, 2000);
    });
    return promis;
}

//agr data aya to resolve <try> wrne reject <catch>
async function _asynx() {   // async then ke replace me  use hota he
    try {
        let data = await fetchAPI();   // wait kre ga jb tk data na ajae 
        console.log(data + " Success") // upr dependent he
    } catch (err) {
        console.log(err + " unsucceesful")
    }
}

_asynx();
// //var x = 10;
//
//
// function sample() {
//
//   if(true){
//     const x = 30;
//     console.log(x);
//     x = 40;
//   }
// console.log(x);
// }
// sample();
//
//  // console.log(x);
//


// function sample() {
// //console.log("Im es5 function");
// return 10;
// }
//
// let x = sample();
// console.log(x);
//
//
// let arrowsample = (a, b, c) => {
//   console.log("hello  welcome to " + a + " " + b);
//   console.log(`hello welcome to ${a} ${b}...!`);
// }
//
// arrowsample(10, 20, 'academy');
// console.log(y);



//naveen(x, a);
// b();
// var x = "Naveen";
// a();
//
// a();
//naveen(x, b);


// function naveen(callback) {
//   // console.log(x);
//   callback();
// }
//
// function a() {
//   console.log(x);
//   console.log("Log in");
// }
//
// function b() {
//   console.log(x);
//   console.log("Log out");
// }
//
// naveen(a);


// function b() {
//     setTimeout(() => {
//         console.log("Inner Function Time out")
//     }, 4000);
//     console.log("inner function");
// }
//
// function one() {
//
//     setTimeout(() => {
//         console.log("Hi")
//     }, 2000);
//
//     b();
//
//     console.log("Hello");
// }
//
// one();

// function pro() {
//     return new Promise((resolve, reject) => {
//         let data = "Hello All ...";
//         resolve(data);
//     });
// }
//
// pro().then(data => {
//     console.log(data);
//     reject("error")
// }).catch(err => {
//     console.log(`error : ${err}`);
// });


//
// function b() {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Inner Function Thime Out");
//             resolve(1)
//         }, 4000);
//     }).then(data => {
//         console.log("inner function");
//     })
// }
//
// let one = () => {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hi");
//             resolve(1);
//         }, 2000);
//     }).then(data => {
//         return new Promise((resolve, reject) => {
//             console.log("hello");
//             resolve(2);
//         })
//     }).then(() => {
//         b();
//     }).catch(err => {
//         console.log(err);
//     })
// }


// let pro = () => {
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hi");
//             resolve(1);
//         }, 2000);
//     }).then(data => {
//         console.log("2");
//         resolve(2)
//     }).then(data => {
//         console.log(data + 1);
//         resolve(3)
//     }).then(data => {
//         console.log(data + 1);
//         resolve(data + 1);
//     }).catch(err => {
//         console.log(err);
//     })
// }



// function b() {
//     setTimeout(() => {
//         console.log("welcome")
//     }, 4000);
//
// }
//
// function one() {
//
//     setTimeout(() => {
//         console.log("Hi")
//     }, 2000);
//
//     b();
//
//     console.log("Digital Lync");
// }
//
// one();



// function one() {

//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Hi")
//             resolve(1)
//         }, 2000);
//     }).then(() => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("welcome")
//                 resolve(1);
//             }, 4000);
//         }).then(() => {
//             new Promise((resolve, reject) => {
//                 console.log("to");
//                 resolve(1)
//             }).then(() => {
//                 console.log("Digital Lync")
//             })
//         })
//     })
// }







// let fun = (callback) => {
//     setTimeout(() => {
//         console.log("Hi");
//     }, 2000)
//     callback();
// }
//
// // let fun = (callback) => {
// //     new Promise((resolve, reject) => {
// //         setTimeout(function() {
// //             console.log("Success!");
// //         }, 2500);
// //     });
// //     callback();
// // }
// //
// let next = () => {
//     console.log("Next");
// }
//
// let another = () => {
//     fun(next);
//     // next();
// }
//
// another();

// b();

// var array = ["a" , "b", "c"]
//
// var iterator = array.entries();
// //console.log(iterator);
// iterator.forEach(function(element) {
//   console.log(element);
// });
// var array = ["a" , "b", "c"]
// [
//   [0,'a'],[0]
// ]
// var array = ["a" , "b", "c"]
// for(var item of array){
//   console.log(item);
// }
// for(var item in array){
//   console.log(item);
// }

//
// let array = ["Digital", "Lync", "Academy", "Technology", "Javascript", "Class",2,34,6];
//
// let a = array[0];
// let b = array[1];
// let c = array[2];
//
// //console.log(a,b,c);
//
// var [x,y,...z] = array;
// // //console.log(x);
// //
//  //console.log(x,y,z);
//
//  let obj = [{id:23, name:"Hari", course:'Javascript', completed:false},{id:23, name:"NAveen", course:'Javascript', completed:true}];
//
// //console.log(obj.name);
//
//
//
//
//
// function coursecompleted(obj) {
//   let id = 45;
// var {id:x,course, completed} = obj;
// if(completed==true && id == 45){
//   console.log(x + " Couser " +course+  "has been completed");
// }else{
//   console.log(x + " Couser " +course+  "has not completed");
// }
//
// }
//
// coursecompleted(obj[1]);
//
//
//
//
//
//
// function fun(a, b, ...h) {
//   console.log(a, b, h);
// }
//fun("digital",1,2,3);
var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);




// results in [[1], 2, [3]]

// modify the first element of num1
// num1[0].push(4);

// console.log(nums);
// results in [[1, 4], 2, [3]]
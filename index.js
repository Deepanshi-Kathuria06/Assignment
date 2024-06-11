// 1. ways to print in js
// console.log("hello world")
// alert("me")
// document.write("this is document write")

// 2. Javascript cosnsole api 
// console.log("hello world " , 4+6 , "another log");
// console.warn("this is warning");
// console.error("this is warning"); 

// 3. Javascript variables
// what are variable? - containers to store data values
// let number1 = 34;
// let number2 = 56;
// console.log(number1+number2);

// 4. Data types in js
//  Numbers
// var num1 = 455;
// var num2 = 56.87;

// Stirng
// var str1 = "this is a string";
// var str2 = " this is also a string;"

// Objects
// let marks ={
//     ravi: 34,
//     shubham : 78,
//     harry:99.98
// }

// console.log(marks);

// Booleans
// let a = true
// let b = false
// console.log(a)

// let und = undefined;
// let und; 
// console.log(und);

// let n = null; 
// console.log(n);

// Symbol

/* At a very high level , there are two types of datatypes on javascript
1. primitive datatypes: undefined , null , number , string, boolean , sybmbol
2. References datatypes:  Arrays and objects
*/ 

// Arrays iin js
// let arr = [1,2,3,4,4];
// console.log(arr[2])  (3) to get number from their indices


// let arr = [1,2,"bablu",4,4];
// console.log(arr[2])  (bablu) 

// Operators in Javascript
// Arithmetic Operatores

//  let a = 34;
//  let b = 56;
//  console.log("the value of a+ b  is" , a+b); 
//  console.log("the value of a+ b  is" , a-b) ;
//  console.log("the value of a+ b  is" , a*b) ;
//  console.log("the value of a+ b  is" , a/b) ;


// Assignment Operatores
// let c = b;
//  c+=2;
// c-=2;  //c = c-2
// c *= 2; 
// c /= 2;
// console.log(c);

// Comparsion Operator
// let x = 45;
// let y = 76;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x>y);
// console.log(x<y);

// Logical Operators
// LOgical and
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)

//  Logical or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical not
// console.log(!false);
// console.log(!true);

// function in js
//  dry = do not repeat yorself
/* function avg(a , b){
     return(a +b )/2;

 }

 c1 = avg(4 ,5 );
 c2 = avg(7 , 1);
 console.log(c1 , c2);
*/

// function avg(a , b){
//     c = (a +b )/2
//     return c;

// }

// c1 = avg(4 ,5 );
// c2 = avg(7 , 1);
// console.log(c1 , c2);


// conditionals in js
// let age = 34;

// // single if statement

// if (age > 8){
//     console.log("your are not a kid")
// }

// if- else statement

// if (age > 8){
//     console.log("your are not a kid")
// }
// else{
//     console.log("you are kid");
// }

// if-else Ladder 
// if(age>32){
//     console.log("you are not a kid")
//     }
//     else  if(age>26){
//         console.log("bachhe nhi hai");
//     }
//     else if(age>22){
//          console.log(" yes bachee nhi rhe");
//     }
//     else if(age>10){
//         console.log("bachhe nhi hai")
//     }
//     else if(age>18){
//         console.log(" 18 bachhe nhi hai")
//     }
//     else{
//         console.log("abchee rhe")
//     }
//     console.log("end of ladder");


// for loop

//  let arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0; i<arr.lenght; i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }


// arr.forEach(function(element){
//     console.log(element);
// })

// while loop

// let j = 0;
// while(j<arr.lenght){
//     console.log(arr[j]);
//     j++;
// }


// do while looop () (firstrun and condiiton check)

// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);

// let myArr = ["Fan" , "camera", 34 , null, true];
// Array methods

// console.log(myArr.lenght);
// myArr.pop();
// myArr.push("Deepanshi")
// myArr.shift();

// const newlen = myArr.unshift("Deepanshi")
// console.log(newlen);
// console.log(myArr);

// String methods in js
// let myString ="Deepanshi loves cooking";
// // console.log(myString.length)
//  console.log(myString.indexOf("loves"));
//  console.log(myString.lastIndexOf("loves"));

// Date in js

// let myDate = new Date();
// console.log(myDate.getFullYear());
// console.log(myDate.getTime());
// console.log(myDate.getDay ());

// DOM Manipulation 

// let elem = document.getElementById('click')
// console.log(elem);

// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

// elemClass[0].classList.add("bg-primary")

// elemClass[0].classList.remove("text-success")

// console.log(elem.innerHTML);
// console.log(elemClass.innerHTML);


// tn = document.getElementsByTagName('button')
// console.log(tn)

// // Seleting using query
// sel =  document.querySelector('containner')
// console.log(sel)

// sel =  document.querySelectorAll('containner')
// console.log(sel)


// window.onload= function(){
//     console.log("the doucment is loaded");
   
// }


// Events in javascript

// firstcontainer.addEventListener('click' ,function (){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
//     console.log('click on the container')
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
    

// firstcontainer.addEventListener('mouseup' , function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//   console.log("mouse up on contaoiner")
// })


// firstcontainer.addEventListener('mousedown' , function(){
//       document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
//     console.log("mouse on contaoiner")
// })



// arrow function 
// function summ(a, b){
//     return a+b;
// }

// summ = (a , b) =>{
//    return a +b;
// }

// logKaro = () =>{
//      document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked</b>"
//     console.log("I am your log")
// }

// // // settimeout and settime interval
// // setTimeout(logKaro , 2000);

// setInterval(logKaro , 2000);


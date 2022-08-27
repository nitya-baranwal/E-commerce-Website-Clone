document.querySelector('form').addEventListener('submit' , myfun);

let dataArr = JSON.parse(localStorage.getItem('signUpData')) || [] ;

function myfun(event){
    event.preventDefault();
   
let fname = document.querySelector('#fname').value;
let lname = document.querySelector('#lname').value;
let email = document.querySelector('#email').value;
let pass =  document.querySelector('#pass').value;


// console.log(fname , lname  , email , pass);

let obj ={

   fname : fname,
   lname : lname,
   email : email,
   pass :  pass,

};

dataArr.push(obj);

console.log(dataArr);

localStorage.setItem('signUpData' , JSON.stringify(dataArr));


}
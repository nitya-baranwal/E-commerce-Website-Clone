let signedInUser = JSON.parse(localStorage.getItem('signUpData')) || [] ;

document.querySelector('form').addEventListener('submit' , loginFun) ;

// console.log(signedInUser);

function loginFun(event){
    event.preventDefault();

    if(signedInUser.length===0){
      alert("No users till now, please Sign Up!");
      return ;
    }

  let inputMail = document.querySelector("#user_email").value;
  let inputPass = document.querySelector("#user_pass").value;
  
 

     let inObj ={
         inMail :inputMail,
         inPass :inputPass
     };


     //console.log(inputMail , inputPass);

     
     let present = false;
     signedInUser.forEach(function(elem){

      if(elem.email===inObj.inMail && elem.pass===inObj.inPass){
        localStorage.setItem("signUser",JSON.stringify(elem));
        present = true;
      }
  
      
    });
     
    if (present===true){
      alert("Log In Successful");
        window.location.href = "./index.html";
      }else{

        if(inputPass == "" &&  inputMail == "" ){
          alert("Please Enter Valid input");
        }else if(inputMail == "" ){
          alert("Enter Email")
        }else if(inputPass == ""  ){
          alert("Enter Password")
        }
        else{
        alert("User Not found SIGN UP");
        window.location.href = "./signup.html";
        }
      }



 }

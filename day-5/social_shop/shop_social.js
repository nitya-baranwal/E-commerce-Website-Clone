

    document.getElementById('search_btn').addEventListener('click' , bar);
    
    let headMenu = document.getElementById('bottom_container')
    headMenu.style.display = 'block';

    let searchMenu = document.getElementById('nav_search_main');
    searchMenu.style.display = 'none'

    function  bar(){
       headMenu.style.display = 'none';
        searchMenu.style.display = 'block'
        } 


    document.getElementById('search_btn2').addEventListener('click' , bar2);
    
    let headMenu2 = document.getElementById('mid_div');
    

    function  bar2(){
        searchMenu.style.display = 'block';
        headMenu2.style.display ='none';
        } 



        // sideCross.style.display ='none'
        // sideMenu.style.display ='none';
     
document.getElementById('side_menu').style.display = "none";        
document.getElementById('hamberg').style.display = "block"; 
document.getElementById('side_cross').style.display = "none";

document.getElementById('toggel_btn').addEventListener('click' , sideFun);
   

     let sideMenu = document.getElementById('side_menu');
     let hamburg = document.getElementById('hamberg');
     let sideCross = document.getElementById('side_cross');
  
  function sideFun(){
    if(sideMenu.style.display ==='none'){
        sideMenu.style.display ='block';
        hamburg.style.display = 'none'
        sideCross.style.display = 'block'; 
    }else{
        sideMenu.style.display ='none';
        hamburg.style.display = 'block'
        sideCross.style.display = 'none'; 
        
    }
  }


 






document.getElementById('cross_btn').addEventListener('click' , searchBar);


  function  searchBar(){
    
    headMenu.style.display = 'block';
    headMenu2.style.display = 'block';
    searchMenu.style.display = 'none'
    
    }




    let wraper=document.getElementsByClassName("shop_the_feed_container")
let btn=document.getElementById("loadmore")
let currentchild=1;
btn.addEventListener("click",function()
{
    for(let i=currentchild;i<currentchild+1;i++)
    {
        if(wraper[i])
        {
            wraper[i].style.display = 'block';
        }
    }
    currentchild ++;
    if(currentchild>=wraper.length)
    {
        event.target.style.display='none';
    }
})


// footer js
document.querySelector('#email-input-form').addEventListener('submit',addSubscriber)
let success_msg = document.getElementById("success-msg");

let arrObj = JSON.parse(localStorage.getItem('subscriber'))||[];

function addSubscriber(event){
    event.preventDefault();
    let val = document.getElementById('email-signup').value;
    if(val !== ""){
        let obj = {
            email: val
        };
        if(arrObj.length === 0){
            arrObj.push(obj);
            success_msg.innerText = "Thanks for Subscribe!";
            localStorage.setItem("subscriber",JSON.stringify(arrObj));
        }else{
            let flag = false;
            for(let i=0;i<arrObj.length;i++){
                if(arrObj[i].email == val){
                    flag = true;
                    break;
                }
            };  
            if(flag){
                success_msg.innerText = "You are already subscribe!"                
            }else{
                arrObj.push(obj);
                success_msg.innerText = "Thanks for Subscribe!";
                localStorage.setItem("subscriber",JSON.stringify(arrObj));
            }
        }
    }
}   

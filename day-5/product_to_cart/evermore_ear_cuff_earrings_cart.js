// navbar js


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
// nav bar end

// product cart pop up


let prod = [
    {
      image1:'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-1_1.jpg?v=1659450226',
      image2:'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_360x.jpg?b=allow_avif&v=1659450395',
      name: 'Evermore Ear Cuff Earrings',
      price:'$10.00'
    },
    {
      image1:'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-1_1.jpg?v=1659450226',
      image2:'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_360x.jpg?b=allow_avif&v=1659450395',
      name: 'Evermore Ear Cuff Earrings',
      price:'$10.00'
    },
    {
      image1:'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-1_1.jpg?v=1659450226',
      image2:'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_360x.jpg?b=allow_avif&v=1659450395',
      name: 'Evermore Ear Cuff Earrings',
      price:'$10.00'
    },
    {
      image1:'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-1_1.jpg?v=1659450226',
      image2:'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_360x.jpg?b=allow_avif&v=1659450395',
      name: 'Evermore Ear Cuff Earrings',
      price:'$10.00'
    },

  ];
  
  let container = document.getElementById('jewel-main-div');
  
  let append = (data) => {
  
    container.innerHTML = null;
    data.forEach( ({image1,image2,name,price}) => {
  
      let card = document.createElement('div');
      card.setAttribute('class','jewel-card-div');
  
      let img1 = document.createElement('img');
      img1.setAttribute('class','jewel-card-image-1');
      img1.src = image1;
  
      let div1 = document.createElement('div');
      div1.setAttribute('class','jewel-image-div');
  
      let img2 = document.createElement('img');
      img2.setAttribute('class','jewel-card-image-2');
      img2.src = image2;
  
      let div2 = document.createElement('div');
      div2.setAttribute('class','div-2');
      div2.setAttribute('class','overlay');
      
      let name1 = document.createElement('p');
      name1.innerText = name;
      name1.setAttribute('class','jewel-card-div-name');
      
      let price1 = document.createElement('p');
      price1.innerText = price;
      price1.setAttribute('class','jewel-card-div-price');
  
      div2.append(img2);
      div1.append(img1,div2);
      card.append(div1, name1, price1);
      container.append(card);
    });
  
  }
  
  append(prod);


  document.querySelector(".jewel-card-image-2").addEventListener("click",addtocartfun)

function addtocartfun()
{
    window.location.href="http://127.0.0.1:5501/evermore_ear_cuff_earrings_cart.html"

}



// product cart pop up end







// footer 

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
// footer end 
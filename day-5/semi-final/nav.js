let links =  document.querySelector('#nav_menu').querySelectorAll('a');
console.log(links);

links.forEach(elem => {
 elem.addEventListener('click' , function(){
  links.forEach(nav=>nav.classList.remove('active'))

  this.classList.add('active');
 })

});


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





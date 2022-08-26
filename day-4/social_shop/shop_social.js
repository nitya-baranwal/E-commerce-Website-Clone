var wraper=document.getElementsByClassName("shop_the_feed_container")
var btn=document.getElementById("loadmore")
var currentchild=1;
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
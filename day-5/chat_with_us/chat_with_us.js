
    // chat with us
// function buttonlogo()
// {
//     return `<i class="fa-solid fa-paper-plane-top"></i>`
// }
let chat_with_us_container=document.getElementById("first_chat_with_us_container")
function create_side_window()
{
    chat_with_us_container.innerHTML="";
    //console.log("click")
    let div1=document.createElement("div");
    div1.setAttribute("class","first_chat_with_us_container_child_first");
    let comment=document.createElement("p")
    comment.setAttribute("class","first_chat_with_us_container_child_first_comment");
    comment.innerText="👋 Hello! Let us know if you have a specific question, or give an idea of what you're looking for. We're happy to make recommendations."
    let div2=document.createElement("div");
    div2.setAttribute("class","first_chat_with_us_container_child_sec");
    let para=document.createElement("p");
    para.setAttribute("class","first_chat_with_us_container_child_sec_para");
    para.innerText="Instant answers";
    let button=document.createElement("button")
    button.setAttribute("class","first_chat_with_us_container_child_sec_button")
    button.innerText="Track my order";
    let div3=document.createElement("div");
    div3.setAttribute("class","first_chat_with_us_container_child_third");
    let textarea=document.createElement("textarea")
    textarea.setAttribute("class","first_chat_with_us_container_child_third_textarea")
    textarea.style.position="relative";
    textarea.placeholder="Write message...";
    let btn=document.getElementById("chat_with_us")
    btn.style.display="none";
    let div6=document.createElement("div")
    let bt=document.createElement("button");
    bt.setAttribute("id","cross_deletion_button")
    bt.innerText="X";
    bt.addEventListener("click",function()
    {
        btfun();
    })
    // let div7=document.createElement("div")
    div1.setAttribute("id","button_chat_send")
    // div7.innerHTML=buttonlogo();
    // div3.append(div7);
    div1.append(comment);
    div3.append(textarea);
    div2.append(para);
    div2.append(button);
    div6.append(bt);
    chat_with_us_container.append(div1,div2,div3,div6)
}

function btfun()
{
    chat_with_us_container.innerHTML="";
    let btn=document.getElementById("chat_with_us")
    btn.style.display="block";
}
//   chat with us end
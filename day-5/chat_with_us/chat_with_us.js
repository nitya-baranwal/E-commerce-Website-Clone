
let chat_with_us_container=document.getElementById("first_chat_with_us_container")
function create_side_window()
{
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
    textarea.placeholder="Write message...";
    let btn=document.getElementById("chat_with_us")
    btn.style.display="none";
    let div5=document.getElementById("first_mega_container_first_child")
    let bt=document.createElement("button");
    bt.setAttribute("id","cross_deletion_button")
    bt.innerText="X";
    bt.addEventListener("click",function()
    {
        btfun();
    })
    div1.append(comment);
    div3.append(textarea);
    div2.append(para);
    div2.append(button);
    div5.append(bt);
    chat_with_us_container.append(div1,div2,div3)
}

function btfun()
{
    let con_bt_fun=document.getElementById("first_chat_with_us_container");
    con_bt_fun.style.display="none";
    let btn=document.getElementById("chat_with_us")
    btn.style.display="block";
    let btttn=document.getElementById("cross_deletion_button")
    btttn.style.display="none";
}
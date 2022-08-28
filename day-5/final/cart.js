let emptyCart = document.getElementById('empty-cart');
let product_cart = document.getElementById('product-cart')



// let cart = JSON.parse(localStorage.getItem('cart'))
let cart = JSON.parse(localStorage.getItem('cart'));

emptyCartFun()

function emptyCartFun(){
    
    if(cart == null || cart.length == 0){
        emptyCart.style.display = 'block';
        product_cart.style.display = 'none'; 
    }else{
        product_cart.style.display = 'block'; 
        emptyCart.style.display = 'none';
        showCartProduct(cart);
    }
   
}


function showCartProduct(cart){
    document.querySelector('tbody').innerHTML = null;
    cart.forEach((ele,index) => {
        let row = document.createElement('tr');
        row.setAttribute('id','cart-row');
        let col1 = document.createElement('td');
        let img = document.createElement('img');
        img.setAttribute('id','cart-image')
        img.src = ele.image1;
        col1.append(img);
        

        let col2 = document.createElement('td');
        let p1 = document.createElement('p');
        p1.id = 'cart-product-name'
        p1.innerText = ele.name;
        let p2 = document.createElement('p');
        p2.innerText = ele.price;
        col2.append(p1,p2);

        let col3 = document.createElement('td');
        let block_div = document.createElement('div');
        block_div.setAttribute('id','block-div')
        let qty_input = document.createElement('div');

        let decrease_btn = document.createElement('button');
        decrease_btn.innerText = "-";

        var show_qty = document.createElement('input');
        show_qty.id = 'input-qty'
        show_qty.value = 1
        let increase_btn = document.createElement('button');
        increase_btn.innerText = "+";

        qty_input.append(decrease_btn,show_qty,increase_btn);
        // let remove = document.getElementsByClassName('remove');
        let del = document.createElement('div'); 
        del.innerHTML = `<svg><path d="M14 3h-3.53a3.07 3.07 0 00-.6-1.65C9.44.82 8.8.5 8 .5s-1.44.32-1.87.85A3.06 3.06 0 005.53 3H2a.5.5 0 000 1h1.25v10c0 .28.22.5.5.5h8.5a.5.5 0 00.5-.5V4H14a.5.5 0 000-1zM6.91 1.98c.23-.29.58-.48 1.09-.48s.85.19 1.09.48c.2.24.3.6.36 1.02h-2.9c.05-.42.17-.78.36-1.02zm4.84 11.52h-7.5V4h7.5v9.5z" fill="currentColor"></path>
        <path d="M6.55 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zM9.45 5.25a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5z" fill="currentColor"></path><>/svg`
        
        del.addEventListener('click',function(){
            removeProd(ele,index);
        });

        block_div.append(qty_input,del)
        col3.append(block_div);

        let col4 = document.createElement('td');
        col4.id = 'total-price'
        col4.innerText = ele.price;

        row.append(col1,col2,col3,col4)
        document.querySelector('tbody').append(row);
       
        var mul = 0;

        increase_btn.addEventListener('click',function(){
            if(show_qty.value != 10){
                +ele.price
                show_qty.value++;
                mul = show_qty.value*ele.price.slice(1);
                col4.innerText = '$'+mul.toFixed(2);
                a();
            }   
        });
        
        decrease_btn.addEventListener('click',function(){
            if(show_qty.value > 1){
                show_qty.value--;
                mul = show_qty.value*ele.price.slice(1);
                col4.innerText = '$'+mul.toFixed(2);
                a();
            }else{
                // run remove function
                removeProd(ele,index);
            }
        });

    });

    a();
}


function a(){
    var table = document.querySelector('table'), sumVal = 0;

    for(var i = 1;i<table.rows.length;i++){
        sumVal += parseInt(table.rows[i].cells[3].innerHTML.slice(1));
    }
    var subtotal = document.querySelector('#subtotal>span');
    subtotal.innerText = sumVal;
}


function removeProd(ele,index){
    cart.splice(index,1);
    localStorage.setItem('cart',JSON.stringify(cart));
    if(cart.length !== 0){
        emptyCart.style.display = 'none';
    }else{
        product_cart.style.display = 'none';
        emptyCart.style.display = 'block';
    }
    
    emptyCartFun();
    showCartProduct(cart);
}
let emptyCart = document.getElementById('empty-cart');
let product_cart = document.getElementById('product-cart')
let objArr = [{
    image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395',
    image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_823x.jpg?v=1659450395',
    name: 'Evermore Ear Cuff Earrings',
    price: '10.00',
    stock_status: true
  },{
    image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-2_1.jpg?v=1659450313',
    image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-3_1_823x.jpg?v=1659450313',
    name: 'Wired Ear Cuff Earrings',
    price: '10.00',
    stock_status: true
  }]

localStorage.setItem('cart',JSON.stringify(objArr));
let cart = JSON.parse(localStorage.getItem('cart'))
if(cart.length !== 0){
    emptyCart.style.display = 'none';
}else{
    product_cart.style.display = 'none'; 
}

showCartProduct(cart);


function showCartProduct(cart){
    cart.forEach(({image1,name,price}) => {
        let row = document.createElement('tr');
        row.setAttribute('id','cart-row');
        let col1 = document.createElement('td');
        let img = document.createElement('img');
        img.setAttribute('id','cart-image')
        img.src = image1;
        col1.append(img);
        

        let col2 = document.createElement('td');
        let p1 = document.createElement('p');
        p1.id = 'cart-product-name'
        p1.innerText = name;
        let p2 = document.createElement('p');
        p2.innerText = '$'+price;
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
        let del = document.createElement('img'); 
        del.src = './1da.png'
        
        del.addEventListener('click',function(){
            removeProd();
        });

        block_div.append(qty_input,del)
        col3.append(block_div);

        let col4 = document.createElement('td');
        col4.innerText = '$'+price

        row.append(col1,col2,col3,col4)
        document.querySelector('tbody').append(row);

        increase_btn.addEventListener('click',function(){
            if(show_qty.value != 10){
                show_qty.value++;
                let mul = show_qty.value*price;
                col4.innerText = '$'+mul.toFixed(2);
                // console.log();
            }
        });

        decrease_btn.addEventListener('click',function(){
            if(show_qty.value != 0){
                show_qty.value--;
                let mul = show_qty.value*price;
                col4.innerText = '$'+mul.toFixed(2);
            }else{
                // run remove function
            }
        });

    });
}



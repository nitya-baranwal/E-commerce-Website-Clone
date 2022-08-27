//products start

let prod = [
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_823x.jpg?v=1659450395',
      name: 'Evermore Ear Cuff Earrings',
      price: '$10.00',
      stock_status: true
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_823x.jpg?v=1659450395',
      name: 'Evermore Ear Cuff Earrings',
      price: '$10.00',
      stock_status: true
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_823x.jpg?v=1659450395',
      name: 'Evermore Ear Cuff Earrings',
      price: '$10.00',
      stock_status: true
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_823x.jpg?v=1659450395',
      name: 'Evermore Ear Cuff Earrings',
      price: '$10.00',
      stock_status: true
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_823x.jpg?v=1659450395',
      name: 'Evermore Ear Cuff Earrings',
      price: '$10.00',
      stock_status: true
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-2_1.jpg?v=1659450313',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-3_1_823x.jpg?v=1659450313',
      name: 'Wired Ear Cuff Earrings',
      price: '$10.00',
      stock_status: false
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-1_1_823x.jpg?v=1659450226',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-4_1_823x.jpg?v=1659450231',
      name: 'Fern Ear Cuff Earrings',
      price: '$10.00',
      stock_status: true
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-1_1.jpg?v=1659450051',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-3_1_823x.jpg?v=1659450054',
      name: 'Blossom Ear Cuff Earrings',
      price: '$10.00',
      stock_status: false
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101108-3_1.jpg?v=1659449973',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101108-4_1_823x.jpg?v=1659449973',
      name: 'Barrel Stone Earrings',
      price: '$18.00',
      stock_status: true
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-2_1_823x.jpg?v=1659449908',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_823x.jpg?v=1659449908',
      name: 'Ball Stud Earrings | Gold',
      price: '$12.00',
      stock_status: false
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101106-G-1_1.jpg?v=1659449836',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101106-G-4_1_823x.jpg?v=1659449841',
      name: 'Classic Stone Stud Earrings | Gold',
      price: '$12.00',
      stock_status: true
    },
    {
      image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101105-1_1_823x.jpg?v=1659449763',
      image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101105-4_1_823x.jpg?v=1659449765',
      name: 'Acclaim Hoop Earrings',
      price: '$20.00',
      stock_status: true
    }
  ];
  
  let container = document.getElementById('jewel-main-div');
  
  let append = (prod) => {
  
    container.innerHTML = null;
  
    prod.forEach( ({image1,image2,name,price,stock_status}) => {
  
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
      div2.setAttribute('class','overlay111');
      
      let name1 = document.createElement('p');
      name1.innerText = name;
      name1.setAttribute('class','jewel-card-div-name');
      
      let price1 = document.createElement('p');
      price1.innerText = price;
      price1.setAttribute('class','jewel-card-div-price');
  
      let icon_div_outer = document.createElement('div');
      icon_div_outer.setAttribute('id','icon_div_outer');
  
      let icon_div_inner = document.createElement('div');
      icon_div_inner.setAttribute('class','icon_div_inner');
  
      // icon_div_inner.innerHTML = `<button id='icon-heart-fill' style='font-size:24px;color:#d8a353'><i class='fas fa-heart'></i></button>`;
      icon_div_outer.innerHTML = `<button id='icon-heart-hollow' style='font-size:24px;color: #d8a353'> <i class='far fa-heart'></i></button>`;
  
      // icon_div_outer.append(icon_div_inner);
      div2.append(img2);
      card.append(div1, name1, price1, icon_div_outer);
      div1.append(img1,div2);
      container.append(card);
    });
  
  }
  append(prod);
  localStorage.setItem('products',JSON.stringify(prod));
  
  let hollow_btn = document.getElementById('icon-heart-hollow');
  hollow_btn.addEventListener('click', () => {
    console.log('hello nitya');
    let outer_div = document.getElementById('icon_div_outer');
    outer_div.innerHTML = `<button id='icon-heart-fill' style='font-size:24px;color:#d8a353'><i class='fas fa-heart'></i></button>`;
  });
  
  let fill_btn = document.getElementById('icon-heart-fill');
  
  // products end
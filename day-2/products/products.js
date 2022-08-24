

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
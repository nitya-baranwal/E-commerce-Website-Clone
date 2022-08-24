
let container=document.getElementById("shop_the_feed_container")
let shop_the_feed_Array=[
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},    
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},    
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},    
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},    
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},    
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},    
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},    
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},    
    {image:"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_360x.jpg?v=1659449908"},]
shop_the_feed_Array_appenddata(shop_the_feed_Array)
function shop_the_feed_Array_appenddata(shop_the_feed_Array)
{
    shop_the_feed_Array.forEach(function(el)
    {
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.image;
        div.append(image)
        container.append(div)
    })
}
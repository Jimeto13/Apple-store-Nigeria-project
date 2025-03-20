const product =[
  {
    id: 0,
    image:'pen.jpeg',
    title: 'Apple Pen',
    price: 150,
  },
  {
    id:1,
    image:'earphone.jpeg',
    title: 'Apple Earpod',
    price: 120,
  },
  {
    id: 2,
    image:'headset.jpeg',
    title: 'Apple HeadSet',
    price: 120,
  },
  {
    id: 3,
    image:'speaker.jpeg',
    title: 'Apple Speaker',
    price: 120,
  },{
    id: 4,
    image:'vision.jpeg',
    title: 'Apple vision',
    price: 120,
  },
  {
    id: 5,
    image:'watches.jpeg',
    title: 'Apple Watch',
    price: 120,
  },
  {
    id: 6,
    image:'macbook.jpeg',
    title: 'Apple MacBook',
    price: 120,
  },
  {
    id: 7,
    image:'phones.jpeg',
    title: 'Apple Phone ',
    price: 120,
  },
  {
    id: 8,
    image:'imac.jpeg',
    title: 'Apple iMac',
    price: 120,
  },  {
    id: 9,
    image:'ipod.jpeg',
    title: 'Apple ipod',
    price: 120,
  }
];
const categories = [...new Set(product.map((item)=>
  {
  return item }))]
  let i = 0;
  document.getElementById('root').innerHTML = categories.map((item)=>{
    var {image,title,price} = item;
    return(
      `<div class='box'>
      <div class='img-box'>
      <img class='images' src=${image}></img>
      </div>
      <div class='botton'>
      <p>${title}</p>
      <h2>${price}.00</h2>` +
      "<button onclick = 'addtocart(" +(i++) + ")'>Add to cart </button> " +
       `</div>
      </div>`
    )
  }).join('')

  var cart =[];
  function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
  }

  function delElment(a){
    cart.splice(a, 1);
    displaycart();
  }

  function displaycart(a){
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if(cart.length==0){
      document.getElementById("Cartiteam").innerHTML = "Your cart is empty";
      document.getElementById('total').innerHTML = "$ "+0+".00";
    }
    else{
      document.getElementById("Cartiteam").innerHTML = cart.map((items)=>
      {
        var {image, title, price} = items;
        total = total+price;
        document.getElementById('total').innerHTML = "$"+total+".00";
      return(
        `<div class= 'cart-item'>
        <div class = 'row-img'>
        <img class='rowimg' src=${image}>
        </div>
        <p style=font-size:12px;'>${title}</p>
        <h2 style='font-size:15px;'>$ ${price}.00</h2>`+ 
        "<i class'fa-solid fa-trash' onclick='delElment(" + (j++) + " )'></i></div>"

      );
       
      }).join('')  ;
      
      }
  }
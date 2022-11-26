"use strict";
let footer=document.querySelector("#footer");
let head=document.querySelector("head");
let root=document.querySelector("#root");
head.innerHTML=HeadView();
root.innerHTML+=Root();
const product_list=document.querySelector(".product-list")
function loadJson()
{
    fetch("data/product.json")
    .then((response)=>response.json())
    .then((data)=>{
      const categories=document.querySelector(".filters");
      let item="";
      data.forEach((element)=>{
        if(element.category_name=="All Categories")
        {
          element.products.forEach((items)=>{
            item+=ProductView(items);
          });
        }
        categories.innerHTML+=CategoryView(element);
      });          
      product_list.innerHTML=item;
      console.log(data);
    });
}
loadJson();
function Root() {
    return `
    <div class="container">
    <div id="nav">
    ${NavView()}
    </div>
    ${SectionProductView()}
  </div>
  <div id="footer">
  ${FooterView()}
  </div>
  ${FootView()}
    `
}
function HeadView(){
    return `


  <title>MateStore</title>


  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#f8f8f8" />


  <link rel="icon" href="images/icon.png" />

  <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;subset=cyrillic"
    rel="stylesheet" />
  <link rel="stylesheet" href="css/reset.css" />
  <link rel="stylesheet" href="css/layout.css" />
  <link rel="stylesheet" href="css/style.css" />

    `
}
function NavView() {
    return `
    <nav>
    <div class="row">
      <div class="col-6">
        <div class="navbar-left">
          <h1>
            <a href="#">Mate<span>Store</span></a>
          </h1>
          <p class="navbar-p">Our Best Shopping Center</p>
        </div>
      </div>
      <div class="col-6">
        <div class="navbar-right">
          <a href="javascript:void(0);">
            <img src="images/shopping-cart.png" alt="shopping cart" class="shopping-cart-img" />
          </a>
        </div>
      </div>
    </div>
  </nav>
    `
}
function SectionProductView(){
    return`
    <section id="product-section">
    <div class="filters">
    </div>
       <div class="products">
           <div class="product-list row">
           </div>
       </div>
    </section>
    `
}
function CategoryView(element)
{
    return`
    <button type="button" onclick="KatFilter(${element.category_id})" class="filter-option">${element.category_name}</button>
    `
}
function ProductView(item) {
    return`
    <div class="col-12 col-md-6 col-lg-3 product-item" data="${item.id}">
         <div class="product-img-box">
                     <img src="${item.images}" alt="product image" class="product-img" />
              <div class="overlay">
                <a class="overlay-link" href="detail.html?id=${item.id}">
                  <img src="images/arrow.png" alt="arrow" class="arrow-img" />
                </a>
                <div class="overlay-info">
                  <p>Design | Branding</p>
                  <h2>${item.name}</h2>
                </div>
              </div>
              <p class="num-box"></p>
            </div>
            <hr />
            <div class="product-content">
              <p class="product-price">${item.price}</p>
              <button type="button" class="btn btn-add-cart"><span class="add-btn">+</span>&nbsp;Cart</button>
            </div>
          </div>
    `
}
function KatFilter(id){
  fetch("data/product.json")
  .then((response)=>response.json())
  .then((data)=>{
    const products=document.querySelector(".product-list");
    products.innerHTML=" ";
     for(const kat of data)
     {
        if(kat.category_id==id)
        {
          kat.products.forEach((element)=>
          {
             products.innerHTML+=ProductView(element);
          });
        }
     }
  });
}
function FooterView() {
    return `
      <footer>
    <div class="row footer-top">
      <div class="col-4 footer-col">
        <div class="footer-item">
          <img src="images/home1-policy.png" alt="car" class="footer-img car-img" />
          <div class="footer-item-content">
            <h3>Money back guaranteed</h3>
            <p>Lorem ipsum dolor amet consectetur</p>
          </div>
        </div>
      </div>
      <div class="col-4 footer-col">
        <div class="footer-item">
          <img src="images/home1-policy2.png" class="footer-img" />
          <div class="footer-item-content">
            <h3>Money back guaranteed</h3>
            <p>Lorem ipsum dolor amet consectetur</p>
          </div>
        </div>
      </div>
      <div class="col-4 footer-col">
        <div class="footer-item">
          <img src="images/home1-policy3.png" class="footer-img" />
          <div class="footer-item-content">
            <h3>Money back guaranteed</h3>
            <p>Lorem ipsum dolor amet consectetur</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row footer-bottom">
      <div class="col-6">
        <div class="footer-bottom-left-box">
          <p class="footer-p">
            Copyrights © MateStore 2021-2022 All Rights Reserved
          </p>
        </div>
      </div>
      <div class="col-6">
        <div class="footer-bottom-right-box">
          <img src="images/pay.png" class="footer-img pay-img" />
        </div>
      </div>
    </div>
  </footer>
  `
  
}
function FootView()
{
    return`
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    `
   
}
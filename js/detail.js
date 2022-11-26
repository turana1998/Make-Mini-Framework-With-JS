"use strict";
const productDetail = document.querySelector(".product-detail");

function loadJson() {
    fetch("data/product.json")
        .then((response) => response.json())
        .then((data) => {
            const id = new URLSearchParams(window.location.search).get("id");
            console.log(id);
            for (const kat of data) {
                for (const product of kat.products) {
                    if (product.id == id) {
                        productDetail.innerHTML=`
                        <div class="row product-detail-item" data="${product.id}">
                        <div class="col-6 product-detail-img-box">
                        <img
                            src="${product.images}"
                            alt="product image"
                            class="product-detail-img"
                        />
                        </div>
                <div class="col-6 product-detail-desc-box">
                  <p class="name">${product.name}</p>
                  <p class="price">${product.price}</p>
                  <p class="desc">${product.text}</p>
                  <p class="subdesc">Imported: NO</p>
                  <hr />
                  <div class="like-icon">
                    <a href="javascript:void(0);" class="icon facebook">
                      <i class="fa fa-facebook"></i>
                      Like
                    </a>
                    <a href="javascript:void(0);" class="icon twitter">
                      <i class="fa fa-twitter"></i>
                      Tweet
                    </a>
                    <a href="javascript:void(0);" class="icon pinterest">
                      <i class="fa fa-pinterest"></i>
                      Save
                    </a>
                    <a href="javascript:void(0);" class="icon google">
                      <i class="fa fa-google-plus"></i>
                      Share
                    </a>
                  </div>
                </div>
              </div>`;
                    }
                }
            }
        })
}
loadJson();
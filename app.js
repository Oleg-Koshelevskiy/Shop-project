let productsCountEl = document.querySelector(".products-count");
console.log(productsCountEl);

let addToCartBtns = document.querySelectorAll(".add-to-cart");
console.log(addToCartBtns);

addToCartBtns.forEach((item) => 
    item.addEventListener("click", function() {
        console.log("clicked");
    })
);

let likedItem = document.querySelectorAll(".like");
console.log(likedItem);
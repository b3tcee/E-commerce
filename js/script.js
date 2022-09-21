document.querySelector(".btn--submit").addEventListener("click", (event) => {
    event.preventDefault();
});

// ============== ELEMENT VARIABLES =====================
let plus = document.querySelector(".quantity__plus"),
    minus = document.querySelector(".quantity__minus"),
    qty = new Number(document.querySelector(".quantity__number").value),
    price = 125;
    productName = "Fall Limited Edition Sneakers";


let cartIcon = document.querySelector(".profile__shop--icon"),
    cartCloseIcon = document.querySelector(".cart__close-button"),
    cartFilledCloseIcon = document.querySelector(".cart__close-button--filled"),
    cart = document.querySelector(".cart__container"),
    cartFilled = document.querySelector(".cart__container--filled"),
    qty_count = document.querySelector(".shop__count");
    cartProductName = document.querySelector(".desc__name");

let quantity = document.querySelector(".quantity__number").value; //0
// console.log(quantity);

// ============== PRICE CHANGE =====================
document.querySelector(".price__old").innerHTML = `$ ${price * 2}`;
document.querySelector(".price__new").innerHTML = "$" + price + ".00";
document.querySelector(".content__title").innerHTML = productName;
cartProductName.innerHTML = productName;



// ============== PRODUCT QUANTITY =====================
const add = () => {
    if (qty <= 9 ) {
        qty += 1
    } else {
        alert("You can only buy 10 units of this product");
    }

    qty_new = new String(qty);
    document.querySelector(".quantity__number").value = qty_new;
    // console.log(qty)
}

const subtract = () => {
    if (qty <= 9 && qty >= 1){
        qty -= 1
    } 

    qty_new = new String(qty);
    document.querySelector(".quantity__number").value = qty_new;
    // console.log(qty) 
}



// ============== ADD PRODUCT TO CART =====================

const addToCart = (e) => {
    document.querySelector(".btn--submit").addEventListener("click", (event) => {
        event.preventDefault();
    });

    quantity = document.querySelector(".quantity__number").value;

    total = quantity * price;
    document.querySelector(".desc__price").innerHTML = `$${price}.00 x ${quantity}.00 <b class="desc__price--total">$${total}.00</b>`;

    // product count will be display block
    qty_count.style.display = "block";
    qty_count.innerHTML = quantity;

    // cart will be display block
    cartFilled.style.display = "block";
}


// ============== SHOWING AND HIDING THE CART =====================
cartIcon.addEventListener("click", showCart);
cartCloseIcon.addEventListener("click", hideCart);
cartFilledCloseIcon.addEventListener("click", hideCart);

function showCart (){
    
    if (quantity == 0) {
        // if true: display cartEmpty
        cart.style.display = "block";
    } else {
        // if false: display cartFilled
        cartFilled.style.display = "block";
    }

    cart.style.display = "block";
}

function hideCart () {
    cart.style.display = "none";
    cartFilled.style.display = "none";
}

// ============== CART ITEM NAME REDUCTION =====================
// check if the screen is 375 and if the length of the product name is more than 20
if (screen.width == 375 && productName.length >= 20) {
    // console.log(screen.width, productName.length)
    let newName = productName.slice(0, 20); // slice function to cut strings up
    cartProductName.innerHTML = `${newName}...`;
}


// ============== DELETE CART ITEMS =====================
// Create a function to delete cart items. (JS)

// Also adjust the design for a filled cart in the mobile view (CSS)


// ============== STEPS TO DEPLOYING YOUR WEBPAGE ON NETLIFY (GitHub)=====================
// https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/


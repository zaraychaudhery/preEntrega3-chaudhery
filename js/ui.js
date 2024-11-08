import {getCartItems} from "./cart.js";

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    updateCartUi();
    });

    const cartOpenButton = document.querySelector(".container-icon");
    const cartSidebar = document.querySelector(".contador-productos");
    const cartCloseButton =document.querySelector(".icon-close");
    
    cartOpenButton.addEventListener("click", ()=>{
        cartSidebar.classList.add("count-products");
    });
    
    cartCloseButton.addEventListener("click", ()=> {
        cartSidebar.classList.remove("count-products");
    }); 
    document.getElementById("count-products").addEventListener("click", (event)=>{
        if(event.target.classList.contains("container-cart-products hidden-cart")){
            const card= event.target.closest(".count-products");
            const productTitle = card.querySelector(".titulo-producto-carrito").innerText;
            const productPrice = card.querySelector(".precio-producto-carrito").innerText;
            const productId = card.getAttribute("data-id");
            const product = createProduct(productId, productTitle, productPrice);
    
            addTocart(product,1);
        } });
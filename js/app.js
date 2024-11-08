import {addTocart,createProduct} from "./cart.js";
import {renderProducts, updateCartUi} from "./ui.js";

const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.contador-productos')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})
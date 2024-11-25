import { getCartItems } from "./cart.js"; 
function showAlert(message) {
    Swal.fire({
        title: '¡Producto añadido!',
        text: message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

export function updateCartUI() {
    const cartContainer = document.querySelector('.container-cart-products');
    cartContainer.innerHTML = ''; 

    const cartItems = getCartItems(); 

    cartItems.forEach((item, index) => {
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart-product');
        cartProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${item.quantity}</span>
                <p class="titulo-producto-carrito">${item.title}</p>
                <span class="precio-producto-carrito">$${item.price}</span>
                <button class="btn-remove" onclick="removeFromCart(${index}); updateCartUI();">Eliminar</button>
            </div>
            <svg class="icon-close" onclick="removeFromCart(${index})">
                <path d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
        cartContainer.appendChild(cartProduct);
    });

    const totalElement = document.querySelector('.total-pagar');
    totalElement.innerText = `$${getTotal()}`; }

    
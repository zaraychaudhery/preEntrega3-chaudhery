const cart = new Cart();
export { cart };

const cartItems = [];


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.item');
        const title = productElement.querySelector('h2').innerText;
        const price = parseFloat(productElement.querySelector('.price').innerText.replace('$', ''));

        const product = { title, price, quantity: 1 }; 

        addToCart(product);

        Swal.fire({
            title: '¡Producto añadido!',
            text: 'El producto ha sido añadido a tu carrito.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        updateCartCount();
        updateCartUI();
    });
});

function addToCart(product) {
    const existingProduct = cartItems.find(item => item.title === product.title);

    if (existingProduct) {
        existingProduct.quantity += 1; 
    } else {
        cartItems.push(product); 
}

function updateCartCount() {
    const countElement = document.getElementById("productList");
    countElement.innerText = cartItems.length;
}


function updateCartUI() {
    const cartContainer = document.querySelector('.container-cart-products');
    cartContainer.innerHTML = ''; 

    cartItems.forEach((item, index) => {
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart-product');
        cartProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${item.quantity}</span>
                <p class="titulo-producto-carrito">${item.title}</p>
                <span class="precio-producto-carrito">$${item.price}</span>
                <button class="btn-remove" onclick="removeFromCart(${index})">Eliminar</button>
            </div>
            <svg class="icon-close" onclick="removeFromCart(${index})">
                <path d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
        cartContainer.appendChild(cartProduct);
    });

    const totalElement = document.querySelector('.total-pagar');
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalElement.innerText = `$${total}`;
}


window.removeFromCart = function(index) {
    const item = cartItems[index];
    if (item.quantity > 1) {
        item.quantity -= 1; 
    } else {
        cartItems.splice(index, 1); 
    }
    updateCartCount();
    updateCartUI();
}}

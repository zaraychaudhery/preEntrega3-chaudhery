import { addToCart, removeFromCart } from "./cart.js";
import { updateCartUI } from "./ui.js";

function showAlert(message) {
    Swal.fire({
        title: '¡Producto añadido!',
        text: message,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

document.querySelectorAll('.info-product button').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.item');
        const title = productElement.querySelector('h2').innerText;
        const price = parseFloat(productElement.querySelector('.price').innerText.replace('$', ''));

        const product = { title, price };
        addToCart(product); 

        
        setTimeout(() => {
            showAlert('El producto ha sido añadido a tu carrito.');
            updateCartUI(); 
        }, 3000);
    });
});

window.removeFromCart = function(index) {
    removeFromCart(index); 
    updateCartUI();
};

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.item');
        const title = productElement.querySelector('h2').innerText;
        const price = parseFloat(productElement.querySelector('.price').innerText.replace('$', ''));

        addToCart({ title, price }); 

       
        setTimeout(() => {
            showAlert('El producto ha sido añadido a tu carrito.');
            updateCartUI();
        }, 3000);
    });
});

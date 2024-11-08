import { getCartItems } from "./cart.js";


const products= [
    

    {
        id: 1,
        title: "Curso Micropigmentación cejas",
        price: 3000.0,
        image: "https://www.newfacemp.com/img/index_c.jpg",
    },
    {
        id: 2,
        title: "Curso Microlabial",
        price: 3000.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5viquDq2toOc4CEWgUjC1EvVlarkUnQ1YSg&s",
    },

    {
        id: 3,
        title: "Curso Micropigmentación delineado",
        price: 3000.0,
        image: "https://album.mediaset.es/eimg/10000/2021/11/12/clipping_zwsb8m_e856.jpg",
    },
    {
        id: 4,
        title: "Curso Extensiones de pestañas",
        price: 1500.0,
        image: "https://starseedmakeup.com/wp-content/uploads/2021/10/Russian-Volume.jpg",
    },

    {
        id: 5,
        title: "Curso visagismo y diseño",
        price: 1000.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk6m5Op47pgzzoEfFf84FlXkM-pWggkllb4A&s",
    },

    {
        id: 6,
        title: "Curso henna en cejas",
        price: 1000.0,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOX-pP8FVmcbri1Yt8g1jAcaUUzR2HqH_F8g&s",
    },
];
 export const renderProducts = ()=> {
    const productList = document.getElementById("productList");

     products.forEach((product)=> {
        const productCart = document.createElement ("article");
        productCart.classList.add("product");
        productCart.setAttribute("data-id", product.id);

        productCart.innerHTML = `
            <div>
            <img class="product__image" src="${product.image}"alt="${
                product.title
            }"/>
            </div>
            <div>
            <h5 class="product__title"> src="${(product.title)}</h5>
            <p class="product__price">$${product.price.toFixed(2)}</p>
            </div>  
            <button class="product__add">Agregar</button>
`; 

productList.append(productCart);
});
};

export const updateCartUi = ()=> {
    const cartContainer = document.querySelector(".cart__container");
    const cartitems = getCartitems();
}

cartitems.forEach((item) => {
     const carItem = document.createElement("div");
carItem.classList.add("cart__item");
carItem.setAttribute("data-id", item.id);

carItem.innerHTML = `
<div class="cart__item">
<div class="cart__item-title">${(item.title)}</div>
<div> ${item.price}</div>
<div>
<button class="cart__increase">+</button>
<button class="cart__decrease">-<
<button class="cart__remove">eliminar</button>
</div>
</div> 
`;
cartContainer.appendChild(carItem);
});

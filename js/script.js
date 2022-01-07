import { foods } from './data/data.js';
import { addClass, formatePrice, removeClass } from './helpers/helpers.js';

const btnAppetizers = document.getElementById('btnAppetizers');
const btnBurguers = document.getElementById('btnBurguers');
const btnDrinks = document.getElementById('btnDrinks');

const filterFoodsAppetizers = () => {
    filterFoods('Appetizers');
    addClass(btnAppetizers, 'active')
    removeClass(btnBurguers, 'active');
    removeClass(btnDrinks, 'active');

};
const filterFoodsBurguers = () => {
    filterFoods('Burguers');
    addClass(btnBurguers, 'active');
    removeClass(btnAppetizers, 'active');
    removeClass(btnDrinks, 'active');

};
const filterFoodsDrinks = () => {
    filterFoods('Drinks');
    addClass(btnDrinks, 'active');
    removeClass(btnBurguers, 'active');
    removeClass(btnAppetizers, 'active');
};

btnAppetizers.addEventListener('click', filterFoodsAppetizers);
btnBurguers.addEventListener('click', filterFoodsBurguers);
btnDrinks.addEventListener('click', filterFoodsDrinks);

function filterFoods(product) {
    const lista = foods.filter(({ type }) => type.toLowerCase() === product.toLowerCase());
    updateTemplate(lista);
}

function updateTemplate(lista) {

    const wrapper = document.querySelector('.products-content');
    let listProducts = document.querySelector('.products-list');

    if (!listProducts) {
        listProducts = document.createElement('ul');
    }
    addClass(listProducts, 'products-list');
    const template =
        lista.map((item) => {
            return `
                <li class="item" >
                    <div class="item-card">
                        <figure class="item-card__figure">
                            <img src="${item.url}" alt="${item.name}">
                        </figure>
                        <div class="item-card-info">
                            <h2 class="title">${item.name}</h2>
                            <span class="price">${formatePrice(item.price)}</span>
                            <span class="description">${item.description}</span>
                        </div>
                    </div>
                </li>
        `
        });

    listProducts.innerHTML = template;
    listProducts.innerHTML = listProducts.innerHTML.split(' ,').join('');
    wrapper.appendChild(listProducts);
}



filterFoodsAppetizers();
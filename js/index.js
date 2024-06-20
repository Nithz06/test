import { cardComponents } from '../component/cardComponents'
import { product } from '../data/product'

let renderArea = document.querySelector('card-area');

product.map((product) => {
renderArea.innerHTML += cardComponents(product);
})
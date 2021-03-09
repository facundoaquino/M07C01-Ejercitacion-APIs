import getProducts from './getProducts.js'
import renderElements from './renderElements.js'
/*---------------------- product element html ---------------------*/

/*---------------------- dom references ---------------------*/

const latestProducts = document.getElementById('latest-products')
const offersProducts = document.getElementById('offers-products')

getProducts('/api/products/latest').then((products) => renderElements(latestProducts, products))

getProducts('/api/products/offers').then((products) => renderElements(offersProducts, products))

import getProducts from './getProducts.js'
import renderElements from './renderElements.js'

/*---------------------- dom references ---------------------*/

const categories = document.querySelectorAll('[data-category]')
const productsContainer = document.querySelector('.products-container')

const productsTitle = document.querySelector('.products-title')
const allProducts = document.getElementById('allProducts')

/*---------------------- handler click  event on nodeList of categories---------------------*/

categories.forEach((category) => {
	category.addEventListener('click', (e) => {
		const nameCategory = category.getAttribute('data-category')
		getProducts(`/api/products/${nameCategory}`).then((products) => {
			renderElements(productsContainer, products)
			renderElements(productsTitle, nameCategory)
		})
	})
})

/*---------------------- loading all products ---------------------*/

const loadingAllProducts = () => {
	const title = 'Todos los productos'
	getProducts(`/api/products/all`).then((products) => {
		renderElements(productsContainer, products)
		renderElements(productsTitle, title)
	})
}
loadingAllProducts()

/*---------------------- handler click  event on allProducts title---------------------*/

allProducts.addEventListener('click',loadingAllProducts)
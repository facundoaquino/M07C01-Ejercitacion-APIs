import getProducts from './getProducts.js'
import renderElements from './renderElements.js'

/*---------------------- dom references ---------------------*/

const categories = document.querySelectorAll('[data-category]')
const productsContainer = document.querySelector('.products-container')

const productsTitle = document.querySelector('.products-title')

categories.forEach((category) => {
	category.addEventListener('click', (e) => {
		const nameCategory = category.getAttribute('data-category')
		getProducts(`/api/products/${nameCategory}`).then((products) => {
			renderElements(productsContainer, products)
			renderElements(productsTitle, nameCategory)
		})
	})
})

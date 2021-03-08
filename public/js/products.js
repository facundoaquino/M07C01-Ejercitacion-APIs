console.log('hello world')
/*---------------------- product element html ---------------------*/

const blockProduct = (product) => `<div class="col-12 col-sm-6 col-lg-3">
<section class="product-box">
    <a href="/products/detail/${ product.id }">
        <figure class="product-box_image">
            <img src="/images/products/${ product.image }" alt="${ product.name }">
        </figure>
        <article class="product-box_data">
            <h2>$${ Math.round(product.price - product.price * product.discount / 100) }</h2>
            <span>${ product.discount } % OFF</span>
            <p>${ product.name }</p>
            <i class="fas fa-truck"></i>
        </article>
    </a>
</section>
</div>`

/*---------------------- dom references ---------------------*/

const latestProducts = document.getElementById('latest-products')
const offersProducts = document.getElementById('offers-products')

/*---------------------- function api ---------------------*/

const getProducts = async (url) => {
	const response = await fetch(url)
	const { data } = await response.json()
	return data
}


/*---------------------- render elements ---------------------*/

const renderElements = (element,datas=[])=>{
    
    datas.forEach(data=>{
        element.insertAdjacentHTML('beforeend',blockProduct(data))
    })
}


getProducts('/api/products/latest').
then(products=>renderElements(latestProducts,products))


getProducts('/api/products/offers').
then(products=>renderElements(offersProducts,products))

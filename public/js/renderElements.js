const blockProduct = (product) => `<div class="col-12 col-sm-6 col-lg-3">
<section class="product-box">
    <a href="/products/detail/${product.id}">
        <figure class="product-box_image">
            <img src="/images/products/${product.image}" alt="${product.name}">
        </figure>
        <article class="product-box_data">
            <h2>$${Math.round(product.price - (product.price * product.discount) / 100)}</h2>
            <span>${product.discount} % OFF</span>
            <p>${product.name}</p>
            <i class="fas fa-truck"></i>
        </article>
    </a>
</section>
</div>`

const renderElements = (element, datas = []) => {
	element.innerHTML = ''
    if(datas instanceof Object){
        datas.forEach((data) => {
            element.insertAdjacentHTML('beforeend', blockProduct(data))
        })

    }else{
        element.insertAdjacentText('beforeend', datas )

    }
}

export default renderElements

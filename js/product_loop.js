// Looping for products
let li_products = document.querySelector('.products'),
    index = 0;

products.forEach(res => {
    li_products.insertAdjacentHTML('beforeend', ''+
    '<div class="carousel-cell">'+
        '<img src="' + res.p_img + '" alt="' + res.p_name + '">'+
        '<p class="cat">' + res.category + '</p>' +
        '<h4 class="product-name">' + res.p_name + '</h4>'+
        '<p class="price">$' + res.price.toFixed(2) + '</p>'+
        '<button class="product_id_'+ index + '" onclick="on_addCart(this)">Add to Cart</button>'+
    '</div>' );
    
    index += 1;
});
const isBrowser = 
        (navigator.userAgent.indexOf('Opera') != -1 || navigator.userAgent.indexOf('OPR') != -1 ) ? 'Opera' :
        (navigator.userAgent.indexOf("Chrome") != -1 ) ? 'Chrome' :
        (navigator.userAgent.indexOf("Safari") != -1 ) ? 'Safari' :
        (navigator.userAgent.indexOf("Firefox") != -1 ) ? 'Firefox' :
        (navigator.userAgent.indexOf("MSIE") != -1 || !!document.documentMode == true ) ? 'IE' : 'unknown';

// JS :: smooth scrolling
//       for IE, Safari and others
//
if ( isBrowser !== 'Firefox' && 
     isBrowser !== 'Chrome' &&
     isBrowser !== 'Opera' ) {

    const ele = document.getElementById('main-nav').children[0].children,
          home = document.querySelector('.menu-element.logo').children[0].children,
          setTime = 250; // time setting for scroll

    // click MENU LIST to the link
    for (const child_element of ele) {
        child_element.addEventListener('click', function(e){

            let curTime = 0, posY = 0,
                nav_margin = document.getElementsByTagName('header')[0].offsetHeight,
                link, curY, toY;

            e.preventDefault();
            link = e.target.hash.replace('#','');
            curY = window.scrollY;
            toY = document.getElementById(link).offsetTop;
            for (curTime=0; curTime < setTime; curTime++){
                setTimeout(function(){
                    posY += (toY -  curY - nav_margin) / setTime;
                    window.scrollTo(0, curY + posY );
                },curTime);
                console.log(toY);
            }
        });
    }

    // click LOGO to the TOP
    for (const child_element of home) {
        child_element.addEventListener('click', function(e){

            let curTime = 0, 
                posY = 0,
                curY, toY;

            e.preventDefault();
            curY = window.scrollY;
            toY = 0;
            for (curTime=0; curTime < setTime; curTime++){
                setTimeout(function(){
                    posY += (toY -  curY) / setTime;
                    window.scrollTo(0, curY + posY);
                },curTime);
            }
        });
    }
}

// Looping for products
let products = [
    {
        p_img: 'images/blue-hipster-backpack.jpg',
        category: 'bags',
        p_name: 'Blue Hipster Backpack',
        price: 69
    },
    {
        p_img: 'images/blue-silk-dress.jpg',
        category: 'dresses',
        p_name: 'Blue Silk Dress',
        price: 80
    },
    {
        p_img: 'images/checked-stretch-dress.jpg',
        category: 'dresses',
        p_name: 'Checked Stretch Dress',
        price: 129
    },
    {
        p_img: 'images/cotton-blue-shirt.jpg',
        category: 'shirts',
        p_name: 'Cotton Blue Shirt',
        price: 89
    },
    {
        p_img: 'images/cotton-yellow-tshirt.jpg',
        category: 'shirts',
        p_name: 'Cotton Yellow Tshirt',
        price: 89
    },
    {
        p_img: 'images/demin-overall-shorts.jpg',
        category: 'demin',
        p_name: 'Demin Overall Shorts',
        price: 89
    },
    {
        p_img: 'images/pink-dotted-dress.jpg',
        category: 'dresses',
        p_name: 'Pink Dotted Dress',
        price: 99
    },
    {
        p_img: 'images/stretch-knit-dress.jpg',
        category: 'dresses',
        p_name: 'Stretch Knit Dress',
        price: 169
    }
    
];

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

    // init Flickity
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
        // options
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: 1000 * 5 // 5 seconds
    });

        // adjust Height
        setTimeout(function(){
            var carousel_cell = document.querySelector('.carousel-cell').offsetHeight;
            elem.children[0].style.height = carousel_cell + 'px';
        }, 80);



// Validation for Email
function validate_email(ele){
    let reg = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/g,
        email = ele.previousElementSibling.value;
    if ( reg.test(email) ){
        // valid Email
        alert('Thanks for subscribing!');
    } else {
        // invalid Email
        alert('Please enter the valid Email address.\nThank you~!');
    }    
}


// STRETCH GOALS :: Scroll and change bg for fixed nav
if ( this.window.scrollY >= 1 ) {
    document.getElementsByTagName('header')[0].classList.add("scrolled");
} else {
    document.getElementsByTagName('header')[0].classList.remove("scrolled");
}
window.addEventListener('scroll', function(){
    if ( this.window.scrollY >= 1 ) {
        document.getElementsByTagName('header')[0].classList.add("scrolled");
    } else {
        document.getElementsByTagName('header')[0].classList.remove("scrolled");
    }
});

// STRETCH GOALS :: event with CART
let num_cart = 0, items_in_cart = [],
    product_id;
    cart = document.getElementsByClassName('cart_num')[0];
    // fx :: ADD A ITEM to CART
    function on_addCart(ele){
        // Add the item to the array
        product_id = Number( ele.classList.value.replace('product_id_','') );
        items_in_cart.push(product_id);

        // Increase NUMBER in Navigation
        num_cart++
        cart.style.visibility = 'visible';
        cart.children[0].innerHTML = num_cart;

        // micro-interaction for the increasing number 
        let transition_time = 150;
        document.getElementsByClassName('cart_num')[0].classList.add('shrink');
        document.getElementsByClassName('cart_num')[0].style.transitionDuration = transition_time+'ms';
        setTimeout(function(){
            document.getElementsByClassName('cart_num')[0].classList.remove('shrink');
        }, transition_time);
    }
    // fx :: RESET ITEMS in CART
    function reset_cart(){
        // Reset the array
        items_in_cart = [];

        // Reset NUMBER in Navigation
        num_cart = 0;
        cart.style.visibility = 'hidden';
        cart.children[0].innerHTML = num_cart;
    }
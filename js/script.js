/*  OPTION 1
    set browsers to apply
*/
const browser = ['Safari', 'IE', 'unknown'];

/*  OPTION 2
    set scroll time
*/
const setTime = 250;

document.addEventListener("DOMContentLoaded", function() {

    // initiate Flickity
    let elem = document.querySelector('.main-carousel');
    let flkty = new Flickity( elem, {
        // options
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: 1000 * 5 // 5 seconds
    });

    // adjust Height
    window.addEventListener('load', function(){
        let carousel_cell = document.querySelector('.carousel-cell').offsetHeight;
        elem.children[0].style.height = carousel_cell + 'px';
    });
    
});

// Validation for Email
function validate_email(e, ele){
    e.preventDefault();
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
if ( window.window.scrollY >= 1 ) {
    document.getElementsByTagName('header')[0].classList.add("scrolled");
} else {
    document.getElementsByTagName('header')[0].classList.remove("scrolled");
}
window.addEventListener('scroll', function(){
    if ( window.window.scrollY >= 1 ) {
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
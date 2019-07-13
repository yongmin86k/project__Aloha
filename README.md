# Aloha project
>This is the first project for the web dev program at RED Academy, showcasing responsive web development using HTML, CSS, and Javascript.

![Preview - Desktop](images/preview_desktop.png)

&nbsp;

---
&nbsp;
## Dependencies
- [CSS - Eric Meyer reset](http://meyerweb.com/eric/tools/css/reset/) : Reset stylesheet to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on.

- [CSS - Font Awesome](https://fontawesome.com/) : Convey all sorts of meaningful information width a popular icon collection to reach the largest amount of people possible.

- [CSS & JS - Flickity](https://flickity.metafizzy.co/) : Use for the RWD to make carousels, galleries, & sliders that feel lively.

&nbsp;

---
&nbsp;
## Functions
- [fx :: Smooth scrolling](#fx--smooth-scrolling)

- [fx :: Loop the Featured Products (Most-Loved Products)](#fx--loop-the-featured-products-most-loved-products)

- [fx :: Email validation](#fx--email-validation)

- [fx :: Fixed header](#fx--fixed-header)

- [fx :: Update cart icon](#fx--update-cart-icon)

&nbsp;

---
&nbsp;
## *fx* :: Smooth scrolling
> Enable smooth scrolling with  [smooth.js](js/script.js) file.

> Or for `Chrome`, `Firefox` and `Opera`, use CSS(`style.css`) for smooth scrolling.
```    
html { scroll-behavior: smooth; }
```
    

### - Getting Started

1. Include `smooth.js` under your custom Javascript file.

    [ `HTML` ]
    ```
    ...
    ...

            <!-- Your Javascript file -->
            <script src="script.js"></script> 

            <!-- smooth.js -->
            <script src="smooth.js"></script>

        </body>
    </html>
    ```
    
2. Initialize - having the following initialization in your Javascript(`script.js`) file :
    
    [ `script.js` ]
    ```
    const browser = ['Safari', 'IE', 'unknown'];

    const setTime = 250; // milliseconds
    ```
    
    < Options >
        &nbsp;

    - Set more browsers
        - Opera = `'Opera'` *(Disable CSS first)*
        - Chrome = `'Chrome'` *(Disable CSS first)*
        - Safari = `'Safari'`
        - Firefox = `'Firefox'` *(Disable CSS first)*
        - Internet Explorer = `'IE'`
        - Others = `'unknown'`
    
    - Change scroll time

        1 second : `const setTime = 1000;`

        5 seconds : `const setTime = 1000 * 5;`

&nbsp;

---
&nbsp;
## *fx* :: Loop the Featured Products (Most-Loved Products)
> Create `HTML` elements for products with [product_data.js](js/product_data.js) and [product_loop.js](js/product_loop.js) files.

### - Getting Started

1. First include `product_data.js` then `product_loop.js` as below.
    ```
    ...
    ...
        <script src="js/product_data.js"></script>

        <script src="js/product_loop.js"></script>

    </body>
    </html>
    ```
2. In your `product_data.js` file, you can **add, edit or remove** the product.
    ```
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
    ...
    ...
    ...
    {
        p_img: 'images/stretch-knit-dress.jpg',
        category: 'dresses',
        p_name: 'Stretch Knit Dress',
        price: 169
    }
    ];
    ```
    - `p_img` : (default `null`) Defines the path of the product image.
    
    - `category` : (default `null`) Defines the category of the product.
    
    - `p_name` : (default `null`) Defines the name of the product.
    
    - `price` : (default `0`) Defines the price of the product. It can be written in decimals.
        - 324 -> `$324.00`
        - 0.99 -> `$0.99`
        - 0.5 -> `$0.50`
3. Include `Flickity.js`.
    &nbsp;

    - Include the Flickity `flickity.css` and `flickity.pkgd.min.js` with your CSS(`style.css`) and Javascript(`script.js`) files as below.
    &nbsp;
    
        [ `HTML` ]
        ```
        <head>
        ...
        ...
        ...
            <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        ...
        ...
        ...
            <script src="product_data.js"></script>
            <script src="product_loop.js"></script>

            <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

            <script src="script.js"></script>
        </body>
        </html>
        ```
4. Create the HTML carousel element and classes with [ `main-carousel products` ].
    &nbsp;

    [ `HTML` ]
    ```
    <div class="main-carousel products">
        <!-- Leave here for product_loop.js  -->
    </div>
    ```

5. Initiate Flickity and adjust carousel height in your Javascript(`script.js`) file.
    &nbsp;

    [ `script.js` ]
    ```
    // initiate Flickity
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
        // options
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: 1000 * 5 // 5 seconds
    });

    // adjust Height
    window.addEventListener('load', function(){
        var carousel_cell = document.querySelector('.carousel-cell').offsetHeight;
        elem.children[0].style.height = carousel_cell + 'px';
    });
    ```

&nbsp;

---
&nbsp;
## *fx* :: Email validation
1. Include following lines to your Javascript(`script.js`) file.
    &nbsp;

    [ `script.js` ]
    ```
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
    ```
2. Create `HTML` elements and include the Javascript(`script.js`) file as below.
    &nbsp;

    [ `HTML` ]
    ```
    <form class="subscription">

        <input type="email" placeholder="Your Email">

        <button onclick="validate_email(this)" type="submit">
            Subscribe
        </button>

    </form>
    ...
    ...
    <script src="script.js"></script>
    ```

&nbsp;

---
&nbsp;
## *fx* :: Fixed header
1. Set styles for the header element when it is at the top. 
    &nbsp;

    CSS `position: fixed` will change the header fixed in same position.
    &nbsp;

    [ `HTML` ]
    ```
    <header>
        <!-- your header content-->
    </header>
    ```
    [ `CSS` ]
    ```
    header {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        background-color: white;
        z-index: 100;
    }
    ```
2. Add class and styles for the header is scrolled.
    &nbsp;

    [ `CSS` ]
    ```
    header.scrolled {
        background-color: rgba(0,0,0,0.6);
    }
    ```
3. Include following snippets in the Javascript(`script.js`) file to trigger `scroll` class when the window is scrolled and when it isn't at the top.
    &nbsp;
    
    [ `script.js` ]
    ```
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
    ```

&nbsp;

---
&nbsp;
## *fx* :: Update cart icon
1. In the `HTML` file, update the codes to show the number in the cart.
    &nbsp;

    [ `HTML` ]
    ```
    <div class="menu-element cart">
        <img onclick="reset_cart()" class="hide-scrolled" src="images/cart-icon.svg" alt="cart-icon">
        
        <div class="cart_num">
            <p></p> <!-- The number will be displayed inside the p element. >
        </div>
    </div>
    ```
2. Update `CSS` file as below. Class `shrink` will trigger when user clicks *Add to Cart* button.
    &nbsp;

    [ `css` ]
    ```
    header > .menu > .cart { position: relative; }
        
        /* Default style for the number of items in the cart */
        header > .menu > .cart > .cart_num {
                visibility: hidden;
                position: absolute;   
                top: -4px; right: -4px;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: red;
                transform: scale(1);
                transition: transform 200ms ease;
            }

        /* Click to Expand and shrink the number */
        header > .menu > .cart > .cart_num.shrink {
            transform: scale(1.5);
        }
            /* Default style for the letter in the cart */
            header > .menu > .cart > .cart_num > p {
                font-family: Arial, Helvetica, sans-serif;
                font-size: 0.625rem;
                font-weight: 600;
                color: white;
                text-align: center;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
                overflow: visible;
            }
    ```
3. Add the `click` event to the button in `HTML` file and initiate the event with the following.
    &nbsp;
    
    [ `HTML` ]
    ```
    <button onclick="on_addCart(this)">Add to Cart</button>
    ```
    > This is included in [fx :: Loop the Featured Products (Most-Loved Products)](#fx--loop-the-featured-products-most-loved-products)
    
    &nbsp;

    [ `script.js` ]
    ```
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
    ```

&nbsp;

---
&nbsp;
## License
- Structural code is open-sourced under the [MIT license](/LICENSE.md). 
&nbsp;

- Learning materials content is copyright (c) 2019 RED Academy.

<3
# Aloha project
>This is the first project for the web dev programme at RED Academy, showcasing responsive web development using HTML, CSS, and Javascript.

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
- [fx :: Smooth scrolling](#fx::smooth-scrolling)
- [fx :: Loop the Featured Products (Most-Loved Products)](#fx-::-loop-the-featured-Products-(most-Loved-products))
- [fx :: Check the email validatoin](#fx::check-the-email-validatoin)

&nbsp;

---
&nbsp;
## *fx* :: Smooth scrolling
> Enable smooth scrolling with  [smooth.js](js/script.js) file.

> Or for `Chrome`, `Firefox` and `Opera`, use CSS(`style.css`) for smooth scrolling.
    &nbsp;

    
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
    
2. Initialize
    &nbsp;

    Having the following initialization in your Javascript file:
    
    [ `script.js` ]
    ```
    const browser = ['Safari', 'IE', 'unknown'];

    const setTime = 250; // milliseconds
    ```
    
    Options
        &nbsp;

    - Add more browsers
        |  |  |  |
        |:-:|:-:|:-:|
        | Opera = `'Opera'` | Chrome = `'Chrome'` | Safari = `'Safari'` |
        | Firefox = `'Firefox'` | Internet Explorer = `'IE'` | Others = `'unknown'`|
    
    - Change scroll time

        1 second : `const setTime = 1000;`

        5 seconds : `const setTime = 1000 * 5;`

&nbsp;

---
&nbsp;
## *fx* :: Loop the Featured Products (Most-Loved Products)
> Create `HTML` elements for product lists with [product_data.js](js/product_data.js) and [product_loop.js](js/product_loop.js) files.

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
2. In your `product_data.js` file, you can **add || edit || remove** the product.
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
        &nbsp;

        For example ::
        | product_data.js || render to HTML |
        |:-:|:-:|:-:|
        |324|->|`$324.00`|
        |0.99|->|`$0.99`|
        |0.5|->|`$0.50`
3. Include Flickity.
    &nbsp;

    - Include the Flickity `flickity.css`, `flickity.pkgd.min.js`, your CSS(`style.css`) and Javascript(`script.js`) files as below.
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
## *fx* :: Check the email validatoin
1. Include following lines to your Javascript(`script.js`) file.
    ```
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
    ```
2. Create `HTML` elements as below and include the Javascript(`script.js`) file.
    ```
    <form class="subscription">

        <input type="email" placeholder="Your Email">

        <button onclick="validate_email(this)" type="button">
            Subscribe
        </button>

    </form>
    ...
    ...
    <script src="script.js"></script>
    ```
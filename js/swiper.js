/* swiper slider  side-bar */

/* Initialize Swiper */

var swiper = new Swiper(".slide-swp", {
    pagination: {
    el: ".swiper-pagination",
    DynamicBullests: true,
    clickable: true
},
autoplay:{
    delay:2500,
},
loop:true,
});

/* swiper slider  sale_slide */

/* Initialize Swiper */

var swiper = new Swiper(".sale_sec", {
    sliderPerView: 5,
    spaceBetween: 30,
    autoplay:{
    delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
    breakpoints:{
        1600:{
            sliderPerView: 5,
        },
        1200:{
            sliderPerView: 4,
            spaceBetween: 30,
        },
        700:{
            sliderPerView: 3,
            spaceBetween: 15,
        },
        0:{
            sliderPerView: 2,
            spaceBetween: 10,
        }
    }
});

var swiper = new Swiper(".product_swip", {
    sliderPerView: 4,
    spaceBetween: 30,
    autoplay:{
    delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
});
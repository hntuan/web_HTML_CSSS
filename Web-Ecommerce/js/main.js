// ---------Click input-search------------
searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

// -----------Login Form------------
let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}

// ----------tabs ----------
const tabs = document.querySelectorAll('.tab_item')
const panes = document.querySelectorAll('.tab_pane')

const tabActive = document.querySelector('.tab_item.active')
const line = document.querySelector('.tabs .line')

function activeLine(tabActive) {
    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'
}
activeLine(tabActive)

tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function(){
        activeLine(this)
        document.querySelector('.tab_pane.active').classList.remove('active')
        pane.classList.add('active')
        document.querySelector('.tab_item.active').classList.remove('active')
        this.classList.add('active')
    }
})


// -----------Scroll header-----------
window.onscroll = () => {
    searchForm.classList.remove('active');
    if (window.scrollY > 80) {
        document.querySelector(".header .header-two").classList.add('active');
    }else{
        document.querySelector(".header .header-two").classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector(".header .header-two").classList.add('active');
    }else{
        document.querySelector(".header .header-two").classList.remove('active');
    }

    fadeOut();
}


// -------------loader function--------------
function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setTimeout(loader, 1000);
}

// --------slider-------
var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlider: true,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,      
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// --------product slider-------
var swiper = new Swiper(".product-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlider: true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,      
        },
        350: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});


// --------Category slider-------
var swiper = new Swiper(".category-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlider: true,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,      
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// --------Reviews slider-------
var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlider: true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,      
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// --------Blogs slider-------
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlider: true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,      
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});



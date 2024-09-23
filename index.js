/********************SIDEMENU NAVIGATION*******************/
const menunav = document.querySelector('.menu-nav');
const openicon = document.querySelector('.nav-open-icon')
const closeicon = document.querySelector('.nav-close-icon');


///INITIALIZE OPEN AND CLOSE NAV
openicon.addEventListener('click', ()=> {
    menunav.classList.add('show');
    menunav.style.right = '0';
    openicon.style.display = 'none';
})

closeicon.addEventListener('click', ()=> {
    menunav.classList.remove('show');
    menunav.style.right = '-500px';
    openicon.style.display = 'block';
})

/********************NEW ARRIVAL SECTION SLIDE NAVIGATION BUTTTON*******************/
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const cardPreview = document.querySelector('.card-preview');
const slideButton = document.querySelectorAll('.slider-wrapper .slide-button');
const maxScrollLeft = cardPreview.scrollWidth - cardPreview.clientWidth;

const initSlider = () => {
    nextButton.addEventListener("click", ()=> {
        cardPreview.style.scrollBehavior = 'smooth';
        cardPreview.scrollLeft += 250;
    });

    prevButton.addEventListener("click", ()=> {
        cardPreview.style.scrollBehavior = 'smooth';
        cardPreview.scrollLeft -= 260;
    });

    ////////REMOVE BUTTON AT THE END OF SCROLL///////
    const handleButtons = () => {
        slideButton[0].style.display = cardPreview.scrollLeft <= 0 ? 'none' : 'block';
        slideButton[1].style.display = cardPreview.scrollLeft >= maxScrollLeft ? 'none' : 'block';
    }

    cardPreview.addEventListener('scroll', () => {
        handleButtons();
    })
}

window.addEventListener('load', initSlider);


/********************HEADER SHOW AND HIDE ON SCROLL*******************/
const header = document.querySelector('.header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', ()=> {
    if (lastScrollY < window.scrollY){
        header.classList.add('header--hidden')
    } else{
        header.classList.remove('header--hidden');
    }

    lastScrollY = window.scrollY;
})

/********************BLOG SECTION SWIPER*******************/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop:true ,
    spaceBetween: 20,
    grabCursor:true,
    slidesPerView: "auto",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets:false,
    },

 //// Navigation arrows
    navigation: {
       nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

/********************CONTAINER REVEAL ON SCROLL*******************/
///New arrival reveal on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    var revealing = document.querySelectorAll('.reveal');

    for (var i = 0; i < revealing.length; i++) {

        var windowheight = window.innerHeight;
        var revealtop = revealing[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            revealing[i].classList.add('active');
        }

        else {
            revealing[i].classList.remove('active');
        }
    }
}



















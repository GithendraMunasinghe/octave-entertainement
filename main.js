let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () =>{
	search.classList.toggle('active');
	cart.classList.remove('active');
	}
	
let cart = document.querySelector('.cart');

document.querySelector('#cart-icon').onclick = () =>{
	cart.classList.toggle('active');
	search.classList.remove('active');
	}
	
	 var swiper = new Swiper(".new-arrival", {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
	
	
	
const productContainers = [...document.querySelectorAll('.product1-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
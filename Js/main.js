// sections info
let head = document.querySelector('.head-page');
let services = document.querySelector('.services');
let aboutUs = document.querySelector('.about-us');
let courses = document.querySelector('.courses');
let team = document.querySelector('.team');
let testemonials = document.querySelector('.testemonials');
let schedule = document.querySelector('.schedule');
let contactUs = document.querySelector('.contact-us');

let links = document.querySelectorAll('.navbar .navbar-nav .nav-item .nav-link');

// slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// start fixed navbar
let navBar = document.querySelector('.navbar');

window.onscroll = function(){
  if(window.scrollY > 200){
    navBar.classList.add('active-nav');
  }else{
    navBar.classList.remove('active-nav');
  }

  // *****************

  if (window.scrollY + 300  > counter.offsetTop) {
    if (!started) {
      numS.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }

  //****************** */

  links.forEach((link) => {
    link.classList.remove("active");
  });

  if (window.scrollY + 50 >= contactUs.offsetTop) {
    links[5].classList.add("active");
  } else if (window.scrollY + 70 >= schedule.offsetTop) {
    links[4].classList.add("active");
  } else if (window.scrollY + 180 >= team.offsetTop ) {
    links[3].classList.add("active");
  } else if (window.scrollY + 30 >= courses.offsetTop) {
    links[2].classList.add("active");
  } else if (window.scrollY + 180 >= services.offsetTop) {
    links[1].classList.add("active");
  } else {
    links[0].classList.add("active");
  }

}

// start portfolio 
let switcherLis = document.querySelectorAll('.switcher li');
let boxes = document.querySelectorAll('.courses .box');


switcherLis.forEach((li) =>{
  li.addEventListener("click" , removeActive);
  li.addEventListener("click" , manageBox);
})

function removeActive(){
  switcherLis.forEach((li) =>{
    li.classList.remove('active');
    this.classList.add('active');
  });
}

function manageBox(){
  boxes.forEach((box) =>{
    box.style.display = 'none';
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) =>{
    el.style.display = 'block';
  })
}


// start info for counter
let numS = document.querySelectorAll(".counter .content .count-num");
let counter = document.querySelector(".counter");
let started = false;

let startCount = function (el) {
  let goal = el.dataset.count;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 50 / goal  );
};
// end counter
// Universal Variables
const $ = (e, p = document) => p.querySelector(e);
const $$ = (e, p = document) => p.querySelectorAll(e);
const GP = (e, p) => gsap.getProperty(e, p);



defaultSetter();


// Creating Important Variables
//Menu Animation
let count = 1;
let crrImage = 0;
const w = window.innerWidth;
const homeSection = document.querySelector(".home-section");
const images = gsap.utils.toArray(".pic_elem");
const chevron = document.querySelector('.chevron');
const cursorHiders = document.querySelectorAll(".c-hider")






// Calling Important Fn
mouseFollower();
handleImageChange();
infoSection();





// Creating Important Fn


function defaultSetter() {
   const index = localStorage.getItem("index");
   const noId = Math.abs(index)+1;
   console.log(noId)
   const imgContainer = document.querySelector(".img-container");
   for (let i = 1; i <= 8; i++) {

      imgContainer.innerHTML += `
         <div class="pic_elem">
            <picture class="user-select-none top-0 left-0 h-screen w-full">
               <source media="(orientation: landscape)" srcset="/public/images/projects/${noId}/${i}.webp" type="image/png">
               <source media="(orientation: portrait)" srcset="/public/images/projects/${noId}/portrait/${i}.webp" type="image/png">
               <img class="image absolute w-full h-screen object-cover" src="/public/images/img${i}.png" alt="">
            </picture>
         </div>
      `;
   }
}

// Cursor animations
function changeCursor() {
   chevron.classList.add('fa-xmark');
   chevron.classList.remove('fa-chevron-right');
}

function changeCursorLinkHover() {
   chevron.classList.remove('fa-chevron-right');
   chevron.classList.add('fa-circle');
}

function mouseFollower() {
   const duration = 0.4;

   window.addEventListener('mousemove', ({x, y}) => {
      gsap.to(".cursor-arrow", { left: x, top: y, duration });
      gsap.to(".chevron",      { left: x, top: y, duration: 0.1});

      // Set arrow rotation
      const rotationAngle = x < w / 2 ? 180 : 0;

      if (crrImage == images.length - 1) {
         if (x > w / 2) {
            changeCursor();
         } else {
            chevron.classList.remove("fa-xmark");
            chevron.classList.add("fa-chevron-right");
         }
      }
      gsap.to(".chevron", { duration, rotation: rotationAngle });
   })

   document.body.addEventListener('mouseleave', () => gsap.to(".cursor-arrow, .chevron", { scale: 0, duration }))
   document.body.addEventListener('mouseenter', () => gsap.to(".cursor-arrow, .chevron", { scale: 1, duration }))
   document.body.addEventListener('mousedown',  () => gsap.to(".cursor-arrow, .chevron", { scale: 0.7 }))
   document.body.addEventListener('mouseup',    () => gsap.to(".cursor-arrow, .chevron", { scale: 1 }))


   cursorHiders.forEach(cHider => {
      cHider.addEventListener('mouseenter', () => {
         gsap.to(".cursor-arrow", { height: 50, width: 50, duration });

         changeCursorLinkHover();
      });

      cHider.addEventListener('mouseleave', () => {
         gsap.to(".cursor-arrow", { height: 100, width: 100, duration });
         chevron.classList.remove("fa-circle");
         chevron.classList.add("fa-chevron-right");
      });
   });


   $$(".menu-btn").forEach(mb => {
      mb.addEventListener('mouseenter', () => {
         changeCursorLinkHover();
         gsap.to(".cursor-arrow", { height: 50, width: 50, duration })
      })
      mb.addEventListener('mouseleave', () => {
         gsap.to(".cursor-arrow", { height: 100, width: 100, duration })
         chevron.classList.remove("fa-circle");
         chevron.classList.add("fa-chevron-right");
      })
   })
}

function handleImageChange() {
   const hide = image => gsap.fromTo(image, { opacity: 1, scale: 1 }, { opacity: 0, scale: 1.1 });
   const show = image => gsap.fromTo(image, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1 });
   gsap.set(".pic_elem", { opacity: 0 })
   gsap.set(images[crrImage], { opacity: 1 })

   $(".img-container").addEventListener('click', function ({x}) {

      if (x < (w / 2) && crrImage > 0) {
         hide(images[crrImage]); // Current Image
         show(images[crrImage - 1]); // Previous Image
         crrImage--;
      } else if (x >= (w / 2) && crrImage < images.length - 1) {
         hide(images[crrImage]); // Currrent Image
         show(images[crrImage + 1]); // Next Image
         crrImage++;
      }

      gsap.to(".progress-bar", { width: crrImage * (100 / 7) + "%" })
   });
}

function infoSection() {
   const stagger = 0.1;
   const menuBtn = $(".menu-btn");
   const menu = $('.menu');
   const tl = gsap.timeline({ paused: true, defaults: {duration: 1.2, ease: 'power4.inOut'} });

   tl
      .set(menu, { opacity: 1 })
      .to(menu, { right: 4, ease: "expo" })
      .from(".js-menu-border", { width: 0, stagger }, "<")
      .from(".menu h1 span", { yPercent: 100, stagger }, "<")
      .from(".menu h2 span", { yPercent: 100, stagger }, "<")
      .from(".menu h3 a", { yPercent: 100, stagger }, "<")
      .from(".menu h4 p", { yPercent: 100, stagger }, "<")
      .to(".overlay", { opacity: .6,  }, "<")

   menuBtn.addEventListener('click', () => {
      changeCursor();
      tl.restart();
   })
   menu.addEventListener('click', () => {
      gsap.to(".menu, .overlay", {
         opacity: 0,
         duration: 0.3,
         onComplete: () => menu.style.right = ''
      })
   })

   menu.addEventListener('mousemove', changeCursor);
   $(".img-container").addEventListener('mousemove', () => {
      chevron.classList.remove('fa-xmark');
      chevron.classList.add('fa-chevron-right');
   })
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log("Mobile View!!");
}
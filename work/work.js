// Universal Variables
const $ = (e, p = document) => p.querySelector(e);
const $$ = (e, p = document) => p.querySelectorAll(e);
const GP = (e, p) => gsap.getProperty(e, p);
gsap.registerPlugin(ScrollTrigger, Flip);
const w = window.innerWidth;





// Calling F(x)
lenisSmoothScroll();
mouseFollower();
w > 758 && horizontalMover();
addWork();
onWorkHover();
onWorkClick();





// Imp F(x)
function lenisSmoothScroll() {
        const lenis = new Lenis();
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return lenis;
}

function horizontalMover() {
    const tl = gsap.timeline({
        scrollTrigger: {
                pin: 'main',
                // markers: true,
                scrub: true,
                start: '10% 10%',
                // end: 'bottom 0%',
                ease: 'none',
        }
    })

    tl.to('.horizontal .img_holder img', {
            objectPosition: '100%',
            ease: 'none',
    })
    .to('.horizontal', {
            ease: 'none',
            x: '-90vw',
    }, 0)
}

function addWork() {
        const horiDiv = $('.horizontal');

        const { workData } = data;

        workData.forEach(work => {
                horiDiv.innerHTML += `<a href="/projects/" class="project w-full md:w-[30vw] md:h-[90%]  flex-shrink-0 overflow-hidden cursor-pointer">
                            <div class="img_holder w-full h-[70vh] md:h-[90%] bg-purple-400 overflow-hidden rounded-2xl">
                                <img class="object-cover object-left size-full" src="${work.imgUrl}" alt="">
                            </div>
                            <div class="project_desc w-full h-fit py-3 pb-6 md:py-8 text-[1.2rem] flex items-center">
                                <h1 class="leading-none">${work.title}<span class="opacity-50 ml-4">${work.catergory}</span></h1>
                            </div>
                        </a>`;
        })
}

function mouseFollower() {
        document.body.addEventListener('mousemove', (evt) => {
                gsap.to('.cursor svg', {
                        x: evt.clientX,
                        y: evt.clientY,
                        xPercent: -50,
                        yPercent: -50,
                        duration: 0.7,
                        ease: 'expo'
                })
        })

        gsap.from('.cursor #outer-circle', {
                keyframes: {
                        opacity: [0, 1, 0],
                        scale: [0, 0.5, 1],
                },
                transformOrigin: 'center center',
                duration: 1,
                repeat: -1,
                ease: 'power1.inOut'
        })
}

function onWorkHover() {
        const duration = 0.3;
        const hide = thing => gsap.to(thing, { opacity: 0, duration });
        const show = thing => gsap.to(thing, { opacity: 1, duration });
        const horiDiv = $('.horizontal');
        const cursorMain = $('.cursor');
        const cursorPlus = $('.cursor_plus');
        const w = window.innerWidth;
        const padding = w/100 * 10;
        const updateCursor = (path) => gsap.to('.cursor_plus svg path', { attr: { d: path } });
        const paths = {
            left: 'M12.925 16.636L19.2889 23L19.996 22.2929L14.3411 16.638L20 10.9791L19.2929 10.272L13.634 15.9309L13.6321 15.9289L12.925 16.636Z',
            center: 'M16 17V27H17V17L27 17V16L17 16V6H16V16L6 16V17L16 17Z',
            right: 'M21.0743 17.3632L14.7103 10.9992L14.0032 11.7064L19.6581 17.3613L13.9992 23.0201L14.7064 23.7272L20.3652 18.0684L20.3672 18.0703L21.0743 17.3632Z'
        };
        hide(cursorPlus);
        window.addEventListener('mousemove', ({ x, y }) => {
                gsap.to(cursorPlus, { x, y, duration: 1, ease: 'expo' })

                if (x < padding) updateCursor(paths.left);
                else if (x > (w - padding)) updateCursor(paths.right);
                else updateCursor(paths.center);
        })
        horiDiv.addEventListener('mouseenter', () => {
                hide(cursorMain);
                show(cursorPlus);
        })
        horiDiv.addEventListener('mouseleave', () => {
                hide(cursorPlus);
                show(cursorMain);
        })
}

function onWorkClick() {
        const works = $$('.project');
        localStorage.setItem("index", 0);

    works.forEach((work, index) => {
        work.addEventListener('click', () => {
            localStorage.setItem("index", index);
        })
    })
}
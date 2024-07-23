



// Universal Variables
const $ = (e, p = document) => p.querySelector(e);
const $$ = (e, p = document) => p.querySelectorAll(e);
const GP = (e, p) => gsap.getProperty(e, p);
gsap.registerPlugin(ScrollTrigger);




// Calling F(x)
hamburgerAnimation();
lenisSmoothScroll();
mouseFollower();
featSection();
enterAnimation();
setTimezone();
underline();
scrollToTop();
footerAnimate();





// Imp F(x)
function mouseFollower() {
    const cursor = $('.cursor');
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
        // opacity: 0,
        // scale: 0,
        transformOrigin: 'center center',
        duration: 1,
        repeat: -1,
        ease: 'power1.inOut'
    })
}

function lenisSmoothScroll() {
    const lenis = new Lenis();
	lenis.on("scroll", ScrollTrigger.update);

	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});

	gsap.ticker.lagSmoothing(0);

    return lenis;
}

function enterAnimation() {
    const paths = $$('#Visual >g>g>*');
    changeSvg(paths, 'hide-multiple');
	const enterTl = gsap.timeline();

	enterTl
		.from('.hero h1 span', {
			scaleY: 0,
			height: 0,
			yPercent: -70,
			stagger: 0.2,
			duration: 0.7,
			ease: 'power2'
		})
		.to(paths, {
			strokeDashoffset: 0,
			stagger: 0.3,
			duration: 1
		})
}

function featSection() {
	localStorage.setItem("index", 0);
	const bgColor = GP('main', 'backgroundColor');
	const points = "0 24.8 0 26 0 26.8 0 27.7 0 28.6 0 29.6 0 30.8 2.1 30.8 4.2 30.8 8.1 30.8 12.3 30.8 14.6 30.8 16.9 30.8 19.3 30.8 21.8 30.8 25.4 30.8 28.8 30.8 32.6 30.8 36.5 30.8 38.6 30.8 41.6 30.8 45.7 30.8 49.4 30.8 51.6 30.8 53.5 30.8 55.3 30.8 56.9 30.8 58.8 30.8 61.3 30.8 63.7 30.8 66.7 30.8 68.5 30.8 71.2 30.8 73.2 30.8 76 30.8 79.2 30.8 82.6 30.8 84.7 30.8 87.1 30.8 90.2 30.8 93.4 30.8 95.8 30.8 98.5 30.8 101.8 30.8 103.4 30.8 106.2 30.8 109.8 30.8 111.8 30.8 114.2 30.8 116.7 30.8 118.5 30.8 116.7 32.6 114.9 34.4 113 36.3 111.3 38 109.4 39.9 107.6 41.7 106.1 43.2 104.5 44.8 102.9 46.4 101 48.3 99.6 49.6 98 51.3 102.2 55.5 104.2 53.6 106 51.8 107.4 50.4 108.6 49.2 110.1 47.7 111.7 46 113.5 44.3 115.6 42.2 117.3 40.5 118.9 38.9 120.3 37.5 121.7 36.1 123.1 34.7 124.5 33.3 126 31.8 127.2 30.5 128.6 29.2 130 27.8 128.3 26.1 126.9 24.7 125.2 22.9 123.8 21.6 122.5 20.3 121.2 19 119.9 17.7 118.5 16.3 116.9 14.7 115.4 13.1 113.7 11.5 112.3 10.1 110.9 8.7 109.4 7.2 108.1 5.9 106.7 4.4 105.3 3.1 103.9 1.7 102.2 0 98 4.2 99.4 5.7 100.6 6.9 102.1 8.4 103.7 10 105 11.2 106.2 12.5 107.9 14.1 108.9 15.1 110.3 16.5 111.9 18.2 113.8 20.1 115.6 21.9 117.1 23.4 118.5 24.8 116.7 24.8 114.5 24.8 112 24.8 109.3 24.8 106 24.8 103 24.8 99.6 24.8 96.8 24.8 94.4 24.8 91.9 24.8 89.4 24.8 87.5 24.8 85.2 24.8 83.2 24.8 79.6 24.8 75.9 24.8 72.3 24.8 70.6 24.8 68 24.8 65.9 24.8 63.7 24.8 62 24.8 59.9 24.8 57.5 24.8 55.9 24.8 54.1 24.8 52.4 24.8 50.6 24.8 48.3 24.8 44.1 24.8 41.3 24.8 37.9 24.8 33.1 24.8 30.1 24.8 26.6 24.8 23 24.8 19.7 24.8 17.1 24.8 14.7 24.8 13 24.8 11.3 24.8 8.7 24.8 6.4 24.8 4.2 24.8 1.8 24.8";
	const pcPoints = "4.6 6.8 3.4 8.3 3 9.5 3.2 10.7 3.9 11.8 5 12.5 6.3 12.7 7.2 12.5 8.2 11.9 9.6 10.4 11.4 9.3 13.5 8.5 15.7 8.2 18.2 8.4 20.8 9.1 23.6 10.6 26.6 13.1 30.2 17.5 33.2 22.4 36.7 29.1 39.2 34 41 37.6 43.4 41.9 46.5 46.7 49.1 50.1 52.1 53 54.7 54.9 57.3 56.2 59.9 57.1 63.2 57.7 66.3 57.8 68.8 57.5 71.7 56.7 74 55.7 78 53.1 81.3 49.8 83.9 46.4 86.3 42.7 88.9 38.2 91.3 33.5 93.2 29.8 94.8 26.6 95.6 25 97.2 22.1 99.2 18.8 101.6 15.4 104.6 12.2 108.2 9.7 112.2 8.4 116.3 7.9 122 8.7 119.9 6.1 117.8 4.4 115.7 3.2 113.3 2.9 110.9 3.3 108.5 3.9 105.4 5.4 103 6.8 101.1 8.6 99.3 10.5 97.8 12.3 95.6 14.9 99.2 18.8 100.9 16.4 102.6 14.3 104.1 12.7 106.7 10.7 108.8 9.5 111.7 8.5 113.5 8.2 115.5 8.3 117 8.6 118.4 9.2 120.2 10.3 121.7 11.7 122.8 12.5 124.1 12.7 125.2 12.4 126.2 11.7 126.8 10.7 127 9.5 126.5 8.2 124.9 6.4 122.7 4.7 120.7 3.6 119 2.9 117.5 2.5 116.2 2.3 114.9 2.2 113.7 2.2 112.2 2.3 110.2 2.6 108.6 3 107.3 3.4 106 4 104.3 5 102.5 6.3 100.4 7.9 98.2 10.2 95.6 13.6 99 16.7 100.4 14.7 101.5 13.4 103.4 11.7 104.5 10.7 105.5 9.8 106.8 9.2 108 8.4 109.8 7.6 111.4 7.3 113 7 114.7 6.8 117.1 6.7 119.4 6.9 122.7 6.4 118.6 3.8 114.7 2.2 111.3 2.4 107.5 3.4 103.9 5.2 100.7 7.5 97.7 10.7 94.6 14.8 91.8 19.6 89.3 24.3 87.3 28.4 84.8 33.4 82.4 37.8 80.2 41.5 77.6 45 74.9 47.9 72.6 49.6 70.4 50.8 68.2 51.5 66.1 51.8 63.7 51.7 61.6 51.3 59.6 50.6 57 49.1 54.8 47.2 52.6 44.8 50.7 42.1 48.1 37.9 45.4 32.9 43.3 28.7 41.3 24.8 37.3 17.3 33 11.1 28.5 6.6 26 4.9 23 3.5 20.5 2.7 17.9 2.3 16.5 2.2 14.8 2.2 13 2.5 11.2 2.9 9.3 3.7 7.6 4.5 5.9 5.7";
	const pcRatio = window.innerWidth > 768;

	const { featureData } = data;
	const features = $$(".feat .feature");
	features.forEach((feature, idx) => {
		feature.innerHTML = `
          <div class="banner w-full h-full overflow-hidden rounded-[var(--round)] saturate-100">
            <img class="scale-[1.2] translate-y-[10%] w-full h-full object-cover" src="${
				featureData[idx].banner
			}" alt="">
          </div>

          <div class="text pointer-events-none p-[5%] absolute top-0 left-0 h-full w-full flex flex-col justify-end items-start gap-y-[var(--gap)]">
            <button class="md:px-[3vw] px-[4vw] max-sm:text-xs md:py-[0.6vw] py-[1vw] rounded-full bg-white md:opacity-0">${
				featureData[idx].button1
			}</button>
            <button class="md:px-[3vw] px-[4vw] max-sm:text-xs md:py-[0.6vw] py-[1vw] rounded-full bg-white md:opacity-0">${
				featureData[idx].button2
			}</button>
            <div class="flex relative h-fit items-center">
              <button class="text-2xl md:text-5xl mr-[var(--gap)] bg-white md:px-[4vw] px-[6vw] md:py-[0.7vw] py-[1.5vw] rounded-full">${
					featureData[idx].cta
				}</button>
              <div class="arrow absolute right-0 translate-x-full h-full aspect-square rounded-full grid place-items-center bg-white">
                <svg class="md:mt-1 md:p-[1vw] p-[3vw] max-md:-rotate-45 size-full" viewBox="0 0 130 60">
                  <g stroke="black" stroke-width="2" fill="#000">
                    <polygon points="${pcRatio ? pcPoints : points}"></polygon>
                  </g>
                </svg>
              </div>
            </div>
          </div>

          <div class="dets opacity-0 fixed z-10 top-0 w-[20%] left-0 -translate-x-[0.9vw] -translate-y-[0.7vw] pointer-events-none space-y-[1vw]">
            <div class="flex gap-x-[var(--gap)]">
              <div class="px-[0.9vw] py-[0.6vw] border-2 border-white rounded-full text-transparent">a</div>
              <button class="uppercase px-[2vw] py-[0.6vw] bg-white rounded-full">${
					featureData[idx].dets.btnText
				}</button>
            </div>

            <div class="display rounded-md overflow-hidden bg-white/20">
              <div class="flex gap-x-1 p-2">
                <div class="h-2 aspect-square bg-white/30 rounded-full"></div>
                <div class="h-2 aspect-square bg-white/30 rounded-full"></div>
                <div class="h-2 aspect-square bg-white/30 rounded-full"></div>
              </div>
              <div class="p-1">
                <img style="--c: 0;" class="rounded-md" src="${
					featureData[idx].dets.imgs[0]
				}" alt="">
              </div>
            </div>
          </div>
    `;


		const match = featureData[idx].banner.match(/\/projects\/(\d+)\//);
		const number = match ? match[1] : null;
		feature.addEventListener('click', () => {
			localStorage.setItem("index", number-1);
		})

		const featureImgCon = feature.querySelector(".banner");
		const featureImg = feature.querySelector(".banner img");
		const btns = feature.querySelectorAll(".text >button");
		const dets = feature.querySelector(".dets");
		const displayImg = feature.querySelector(".dets .display img");
		const arrowSvg = feature.querySelector(".feature .text .arrow >svg");
		const arrow = feature.querySelector(".text .arrow >svg polygon");
		const urls = featureData[idx].dets.imgs;
        
        
		gsap.fromTo( featureImg,{
				yPercent: 10,
				scale: 1.2,
			},
			{
				yPercent: -10,
				scale: 1.2,
				scrollTrigger: {
					scroller: "body",
					trigger: featureImg,
					start: "top bottom",
					end: "bottom top",
					scrub: pcRatio ? 2 : true,
					// markers:true
				},
			}
		);

		if (!pcRatio) return;
		const featTl = gsap.timeline({
			paused: true,
			defaults: {
				ease: "power1.inOut",
				duration: 0.4,
			},
		});
		featTl
			.to(featureImgCon, { filter: "saturate(0)" }, "a")
			.fromTo(
				btns,
				{
					opacity: 0,
					yPercent: -100,
				},
				{
					opacity: 1,
					yPercent: 0,
					stagger: 0.1,
				},
				"a"
			)
			.to(arrowSvg, { rotation: -45 }, "a")
			.to(arrow, { attr: { points } }, "a");

		let c = GP(displayImg, "--c");
		setInterval(() => {
			if (c < urls.length - 1) c++;
			else c = 0;
			displayImg.src = urls[c];
		}, 1000);

		feature.addEventListener("mouseenter", (d) => {
			gsap.to("main", { backgroundColor: featureData[idx].dataBg });
			gsap.to(dets, { opacity: 1, duration: 0.2 });
			featTl.play();

			gsap.set(dets, {
				top: d.y,
				left: d.x,
			});
		});
		document.body.addEventListener("mousemove", (d) => {
			gsap.to(dets, {
				top: d.y - 12,
				left: d.x - 8,
				ease: "power2",
				duration: 0.8,
			});
		});
		feature.addEventListener("mouseleave", () => {
			gsap.to("main", { backgroundColor: bgColor });
			gsap.to(dets, { opacity: 0, duration: 0.2 });
			featTl.reverse();
		});
	});
}

function hamburgerAnimation(){
	let isOpen = false;
	const ham = $('.hamburger');
	const lines = $$('.line', ham);
	const togglerTl = gsap.timeline({ paused: true, defaults: {ease: 'power1.inOut', duration: 0.5} });

	togglerTl
		.to(ham, { gap: 0 }, 0)
		.to(lines[0], { rotation: 45, transformOrigin: 'center', y: 1 }, 0)
		.to(lines[1], { rotation: -45, transformOrigin: 'center', y: -1 }, 0)
		.to(ham, { backgroundColor: 'white',}, 0)
	


	ham.addEventListener('click',() => {
		
		if(!isOpen){
			togglerTl.play();
			gsap.fromTo('.nav-page', {x: '100%', opacity: 1}, {x: 0})
		} else{
			togglerTl.reverse();
			gsap.to('.nav-page', {opacity: 0})
		}
		isOpen = !isOpen;
	})

	
	// Show and hide toggler
	gsap.from(ham,{
		scale: 0,
		scrollTrigger: {
			trigger: '.hero',
			// markers: true,
			scrub: 1,
			start: '30% 20%',
			end: '30% top'
		}
	})
}

function setTimezone(){
	const timezone = $(".timezone");

	const date = new Date();

	const hour = date.getHours();
	const minutes = date.getMinutes();

	timezone.innerHTML = `${hour % 12}:${minutes}`;
}

function scrollToTop() {
	const scrolltop = $('.scrollTop');
	scrolltop.addEventListener('click',() => {
		window.scrollTo({top: 0, behavior: 'smooth'})
	})
}

function footerAnimate() {
	const footerCirc = $('.footer__circle');

	gsap.from(footerCirc, {
		scale: 0,
		ease: 'none',
		scrollTrigger: {
			trigger: '.footer',
			// markers: true,
			scrub: true,
			start: 'top 60%',
			end: 'top 0%',
		}
	})
}

function underline() {
	const underlineContainer = document.querySelector('.get-in-touch-footer');
	let enterAnimation;
	let leaveAnimation;
  
	underlineContainer.addEventListener('mouseenter', () => {
	  if (leaveAnimation && leaveAnimation.isActive()) {
		leaveAnimation.kill();
	  }
  
	  gsap.set('.get-in-touch-footer .underline', { left: 0 });
	  enterAnimation = gsap.to('.get-in-touch-footer .underline', {
		width: '100%',
		onComplete: () => {
		  enterAnimation = null;
		}
	  });
	});
  
	underlineContainer.addEventListener('mouseleave', () => {
	  if (enterAnimation && enterAnimation.isActive()) {
		enterAnimation.kill();
	  }
  
	  leaveAnimation = gsap.to('.get-in-touch-footer .underline', {
		width: 0,
		left: '100%',
		onComplete: () => {
		  leaveAnimation = null;
		}
	  });
	});
}


// ! Change svg code here

function changeSvg(element, arg) {
	if (arg === "hide") {
	    return returnLength(element, "hide");
	} else if (arg === "hide-multiple") {
	    element.forEach((e) => {
		returnLength(e, "hide");
	    });
	    return returnLength(element[0]);
	} else {
	    return returnLength(element);
	}
    }
    
    function returnLength(element, arg) {
	let length = 0;
	const tg = element.tagName;
	if (tg === "line") {
	    let line = element;
	    let x1 = parseFloat(line.getAttribute("x1"));
	    let y1 = parseFloat(line.getAttribute("y1"));
	    let x2 = parseFloat(line.getAttribute("x2"));
	    let y2 = parseFloat(line.getAttribute("y2"));
	    length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	} else if (tg === "path") {
	    let path = element;
	    length = path.getTotalLength();
	} else if (tg === "polyline") {
	    let points = element.points;
	    for (let i = 0; i < points.numberOfItems - 1; i++) {
		let p1 = points.getItem(i);
		let p2 = points.getItem(i + 1);
		length += Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
	    }
	} else if (tg === "text" || tg === "tspan") {
	    length = element.getComputedTextLength();
	}
    
	if (arg === "hide") {
	    element.style.strokeDasharray = length + " " + length;
	    element.style.strokeDashoffset = length;
	}
    
	return length;
    }
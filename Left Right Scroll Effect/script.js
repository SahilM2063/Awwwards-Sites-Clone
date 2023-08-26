gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
        };
    }

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed"*/
});

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".part2",
        start: "0%, 90%",
        end: "204%, 4%",
        scroller: "#main",
        // markers: true,
        scrub: true
    }
});

tl.to(".stripe-l", {
    marginLeft: "0%"
}, 'anything')

tl.to(".stripe-r", {
    marginLeft: "-100%"
}, 'anything')


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();





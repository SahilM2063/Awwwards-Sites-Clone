const tl = gsap.timeline();

tl.from(".intro > div", 1.8, {
    opacity: 0,
    y: -100,
    ease: "power4.out",
    delay: 1,
    stagger: {
        amount: 0.3,
    },
});

tl.from(
    ".hr",
    1.8,
    {
        width: 0,
        ease: "power4.out",
        delay: 1,
        stagger: {
            amount: 0.3,
        },
    },
    "-=1.5"
);

tl.from(
    ".reveal div",
    1.8,
    {
        y: 200,
        ease: "power4.out",
        stagger: {
            amount: 0.8,
        },
    },
    "-=2"
); 

tl.from(
    ".nav-item",
    1.8,
    {
        opacity : 0,
        y: 100,
        ease: "power4.out",
        stagger: {
            amount: 0.3,
        },
    },
    "-=2"
); 

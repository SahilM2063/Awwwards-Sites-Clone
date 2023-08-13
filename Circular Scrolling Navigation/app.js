var active = 3;

const btns = document.querySelectorAll(".btn");
const stripes = document.querySelectorAll(".stripe")
// console.log(stripes)
// console.log(btns)

btns.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
        gsap.to(".circle", {
            rotate: (active - (index + 1)) * 20,
            ease: Expo.easeInOut,
            duration: 1
        })
        removeelemstyle();
        gsap.to(this, {
            opacity: 1
        })
        gsap.to(stripes[index], {
            opacity: 1
        })
    })
})

function removeelemstyle() {
    gsap.to(btns, {
        opacity: 0.2
    })

    gsap.to(stripes, {
        opacity: 0.4
    })

}

activeBtn = btns[active - 1];
gsap.to(activeBtn, {
    opacity: 1
})

gsap.to(".circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})

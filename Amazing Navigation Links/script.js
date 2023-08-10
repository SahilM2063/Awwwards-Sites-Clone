const navLinks = document.querySelectorAll(".nav-link");
const navCorners = document.querySelector(".nav-corners");

navLinks.forEach(function(link){
    link.addEventListener("click", function(){
        navLinks.forEach(function(link){
            link.classList.remove("active");
        });
        this.classList.add("active");
    });

    link.addEventListener("mouseenter", function(){
        const state = Flip.getState(navCorners);
        this.appendChild(navCorners);
        Flip.from(state, {
            duration : 0.4,
            ease: "power1.inOut"
        });1
    });

    link.addEventListener("mouseleave", function(){
        const state = Flip.getState(navCorners);
        const activeLink = document.querySelector(".nav-link.active")
        activeLink.appendChild(navCorners);
        Flip.from(state, {
            duration : 0.4,
            ease: "power1.inOut"
        });
    });
});
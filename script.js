// const burgerIcon = document.getElementById("mobile-nav-icon");

// const mobileNav = document.querySelector(".mobile-nav");

// burgerIcon.addEventListener("click", () => {
//     mobileNav.style.display = "inline-block";
// });

// const closeIcon = document.querySelector(".close-icon");

// closeIcon.addEventListener("click", () => {
//     mobileNav.style.display = "none";
// });

const burgerIcon = document.getElementById("mobile-nav-icon");

const mobileNav = document.querySelector(".mobile-nav");
mobileNav.style.padding = "4rem 2.8rem";
mobileNav.style.textAlign = "center";

burgerIcon.addEventListener("click", () => {
    mobileNav.classList.add("show-menu");
});

const closeIcon = document.querySelector(".close-icon");

closeIcon.addEventListener("click", () => {
    mobileNav.classList.remove("show-menu");
});

const logoMobileNav = mobileNav.querySelector(".mobile-nav_logo");
logoMobileNav.style.width = "10rem";
logoMobileNav.style.marginBottom = "3rem";

const linksInsideMobileNav = mobileNav.querySelectorAll("a");

linksInsideMobileNav.forEach((link) => {
    link.style.fontSize = "2.6rem";
    link.style.lineHeight = "4rem";
    link.style.marginBottom = "2rem";
});

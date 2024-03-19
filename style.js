const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

menuBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("show-menu");
})

hideMenuBtn.addEventListener("click", () => menuBtn.click())

showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});

let index = 0;
        displayImages();
        function displayImages() {
        let i;
        const images = document.getElementsByClassName("image");
        for (i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        index++;
        if (index > images.length) {
            index = 1;
        }
        images[index-1].style.display = "block";
        setTimeout(displayImages, 2000); 
        }
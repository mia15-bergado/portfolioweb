
window.addEventListener("load", function() {
    console.log("Welcome to Mia Bergado's Portfolio Website!");
});

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if(link.href === window.location.href){
        link.style.textDecoration = "underline";
    }
});
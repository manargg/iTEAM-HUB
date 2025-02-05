let leftsideNav = document.getElementById("leftside-nav");
let listHum = document.getElementById("menu-purger");
let closeIcon = document.querySelector("#leftside-nav .logo i");

function menu(){
    leftsideNav.classList.add("active");
}

function closeMenu(){
    leftsideNav.classList.remove("active");
}

listHum.addEventListener("click", menu);
closeIcon.addEventListener("click", closeMenu);

document.querySelectorAll("#leftside-nav a").forEach(link => {
    link.addEventListener("click", () => {
        leftsideNav.classList.remove("active");
    })
})
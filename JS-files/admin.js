    // Retrieve username from localStorage or set a default value
    const username = localStorage.getItem('username') || '';

    if (username) {
        document.querySelectorAll('.username').forEach(span => {
            span.textContent = username;
        });
    } else {
        document.querySelectorAll('.username').forEach(span => {
            span.textContent = 'Guest';
        });
    }


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
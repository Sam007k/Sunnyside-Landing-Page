const menu = document.getElementById("menu");
const btn = document.getElementById("menu-btn");
const triangle = document.getElementById("triangle");


btn.addEventListener('click', () => {
    menu.classList.toggle("show-menu");
    triangle.classList.toggle("show-menu");
    console.log('hello');
})


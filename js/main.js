const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');


menuBtn.addEventListener('click', (e) => {
    menuBtn.classList.toggle('fa-times');
    sideMenu.classList.add('pad-menu');
    sideMenu.style.height = '30rem';
})

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    sideMenu.classList.remove('pad-menu');
    sideMenu.style.height = '0rem';
}
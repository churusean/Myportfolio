const text = baffle('.tag');
text.set({
    characters: '2/895054@157638!%3362$#*3352&^61237',
    speed: 200
});
text.start();
text.reveal(5000);


const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarlink = document.getElementsByClassName('bar')[0]
const menubar = document.getElementsByClassName('menubar')[0]
const banner = document.getElementsByClassName('banner')[0]
const myface = document.getElementsByClassName('myface')[0]
togglebutton.addEventListener('click', () => {
    navbarlink.classList.toggle('active')
    menubar.classList.toggle('active')
    banner.classList.toggle('active')
    myface.classList.toggle('active')
})
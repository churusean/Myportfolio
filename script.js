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

togglebutton.addEventListener('click', () => {
    navbarlink.classList.toggle('active')
    menubar.classList.toggle('active')
})


const makeNavLinksSmooth = () => {
    const navLinks = document.querySelectorAll('.navbar-link');

    for (let n in navLinks) {
        if (navLinks.hasOwnProperty(n)) {
            navLinks[n].addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(navLinks[n].hash)
                    .scrollIntoView({
                        behavior: "smooth"
                    });
            });
        }
    }
}

const spyScrolling = () => {
    const sections = document.querySelectorAll('.section');

    window.onscroll = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

        for (let s in sections)
            if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos) {
                const id = sections[s].id;
                document.querySelector('.activebar').classList.remove('activebar');
                document.querySelector(`a[href*=${ id }]`).parentNode.classList.add('activebar');
            }
    }
}

makeNavLinksSmooth();
spyScrolling();
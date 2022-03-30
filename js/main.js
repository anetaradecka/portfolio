// Navbar slider
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav-mobile');
    const navLinks = document.querySelectorAll('.nav-links-mobile li');

    burger.addEventListener('click', () => {

        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
            
        });
        
        burger.classList.toggle('toggle');
    });

}

// Screen width check on page load
window.onload = (event) => {
    const nav = document.querySelector('.main-nav-desktop');
    
    if (window.screen.width > 992) {
        nav.classList.add('sticky')
    } else { return }
  };

// Screen width check on screen resizing
window.onresize = (event) => {
    const nav = document.querySelector('.main-nav-desktop');

    if (window.screen.width > 992) {
        nav.classList.add('sticky') ;
    }  else {
        nav.classList.remove('sticky')
    }
}

// Navbar color change on scroll
window.onscroll = (event) => {
    let nav = document.querySelector('.main-nav-desktop'); 
    
    if(nav.classList.contains('sticky')) {
        nav.classList.toggle('scrolling', window.scrollY > 100);
    }
    
}

// Header typing effect
const typing = () => {
    const texts = ['to design', ' to create', 'to edit pages.'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type(){
        if(count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.querySelector('.typing').textContent = letter;
        if(letter.length === currentText.length) {
            count++;
            index = 0;
        }

        setTimeout(type, 200);
    }());
}

// Page engine
const app = () => {
    navSlide();
    typing();
}

app();
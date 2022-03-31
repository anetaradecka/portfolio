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

// Projects slider vertical
function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

const projectsSliderVertical = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  
    projectsSliderVertical.forEach( project => {
      const slideInAt = (window.scrollY + window.innerHeight) -
          project.offsetHeight / 3; 
      
      const isHalfShown = slideInAt > project.offsetTop;

      if(isHalfShown) {
          project.classList.add('active');
      } 
  });
}

window.addEventListener('scroll', debounce(checkSlide));

// Projects slider horizontal
const projectsSliderHorizontal = document.querySelectorAll('.other-projects .slide-in-box');
const sliderArray = [...projectsSliderHorizontal];

function checkSlideHorizontal(e) {
    let index = 0;

    sliderArray.forEach((item, index) => {
        setTimeout(() => {
            if (index === 0 ) {
                const slideInAt = (window.scrollY + window.innerHeight) -
                        item.offsetHeight / 3; 
          
                const isHalfShown = slideInAt > item.offsetTop;
    
                if(isHalfShown) {
                    item.classList.add('active');
                } 
            } else if (
                (index > 0) && 
                (sliderArray[index-1].classList.contains('active'))
                ) {
                    
                const slideInAt = (window.scrollY + window.innerHeight) -
                        item.offsetHeight / 3; 
    
                const isHalfShown = slideInAt > item.offsetTop;
                
                if(isHalfShown) {
                    
                    item.classList.add('active');
                }
            }  
        }, index * 500);
        
    });

}

window.addEventListener('scroll', debounce(checkSlideHorizontal));

// Page engine
const app = () => {
    navSlide();
    typing();
}

app();
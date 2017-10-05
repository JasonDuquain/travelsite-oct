/******MobileMenu.js*******/

class MobileMenu {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.events();
    }
    
    events() {
        this.menuIcon.addEventListener('click', () => {
            this.menuContent.classList.toggle('site-header__menu-content--is-visible');
            this.siteHeader.classList.toggle('site-header--is-expanded');
            this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
            
        });
    }
}

var mobileMenu = new MobileMenu();

/******** RevealOnScroll.js********/

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.feature-item, .testimonial'); 
        this.hideInitially();
        this.showElements();
    }
    
    hideInitially() {
        this.itemsToReveal.forEach((item) => {
            item.classList.add('reveal-item');
        });
    }
    
    showElements() {
        this.itemsToReveal.forEach((item) => {
            document.addEventListener('scroll', (e) => {
               if (item.classList.contains('testimonial') && item.getBoundingClientRect().top <= 300) {
                    item.classList.add('reveal-item--is-visible');
               } else if (item.classList.contains('feature-item') && item.getBoundingClientRect().top <= 600) {
                       item.classList.add('reveal-item--is-visible');
                   }
             
            });
        });
    }
}
 


var revealOnScroll = new RevealOnScroll();


/******* StickyHeader.js************/







/************** Modal.js ***********/
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

class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.headerTriggerElement = document.querySelector('.large-hero__title');
        this.darkenHeader();
        this.pageSections = document.querySelectorAll('.page-section');
        this.navSections = document.querySelectorAll('.primary-nav a');
        this.createPageSectHighlight(); 
    }
    
    darkenHeader() {
        document.addEventListener('scroll', () => {
            if (this.headerTriggerElement.getBoundingClientRect().top <= 0) {
               this.siteHeader.classList.add('site-header--dark'); 
            } else {
                this.siteHeader.classList.remove('site-header--dark');
            }
        });
    }
    
    createPageSectHighlight() {
        this.pageSections.forEach((pageSect) => {
            document.addEventListener('scroll', (e) => {
               for (let i = 0; i < this.navSections.length; i++) {
                   if (this.navSections[i].getAttribute('id') === pageSect.getAttribute('data-matching-link').slice(1)) {
                       if (pageSect.getBoundingClientRect().top <=5 && pageSect.getBoundingClientRect().top >= pageSect.getBoundingClientRect().height * -1 + 5) {
                           this.navSections[i].classList.add('is-current-link');
                       } else {
                           this.navSections[i].classList.remove('is-current-link');
                       }
                   }
               } 
            });
        }); //this.pageSections.forEach()
    }
}

var stickyHeader = new StickyHeader();



/************** Modal.js ***********/

class Modal {
    constructor() {
        this.openModalButton = document.querySelectorAll('.open-modal');
        this.modal = document.querySelector('.modal');
        this.closeModalButton = document.querySelector('.modal__close');
        this.events(); 
    }
    
    events() {
       this.openModalButton.forEach((openBtn) => {
            openBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.modal.classList.add('modal--is-visible');
            });
        });
        
        this.closeModalButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.modal.classList.remove('modal--is-visible');
       });
        
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
               this.modal.classList.remove('modal--is-visible'); 
            }
        })
    }
    
}


var modal = new Modal();






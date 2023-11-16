const headerBtn = document.querySelector('.header__bars');
const mobileNav = document.querySelector('.mobile-nav')
const mobileLinks = document.querySelectorAll('.mobile-nav__links')

// State (or) StatusS
let isMobileNavOpen = false;


headerBtn.addEventListener('click', () => {
  isMobileNavOpen = !isMobileNavOpen;

  if (isMobileNavOpen) {
    mobileNav.style.display = 'flex';
    document.body.style.overflowY = 'hidden';
  } else {
    mobileNav.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }

});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    isMobileNavOpen = false;
    mobileNav.style.display = 'none'
    document.body.style.overflowY = 'auto';

  })
})







// WHat the actual fuck is the problem with this file, it's not working i dont know whyy??

// solve it later...

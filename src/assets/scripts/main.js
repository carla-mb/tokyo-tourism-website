/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// TOGGLE MENU ON MOBILE SCREENS

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active');
  });

  document.body.addEventListener('click', function(event) {
    // Check if the clicked element is not within the menu or menu toggle button
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
      menu.classList.remove('active');
    }
    if (menu.contains(event.target)) {
      menu.classList.remove('active');
    }
  });
});

// ADD TARGET 'BLANK' TO ALL EXTERNAL LINKS

document.querySelectorAll('a').forEach(function(elem) {
    if (!elem.closest('.menu') && !elem.closest('.desktop-menu')) {
        elem.setAttribute('target', '_blank');
    }
});

// HIGHLIGHT CURRENT SECTION IN MOBILE AND DESKTOP MENUS

document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const menuItems = document.querySelectorAll('.menu__item');
    const desktopMenuItems = document.querySelectorAll('.desktop-menu__item');

    let currentSection = '';

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Add/remove --active class for mobile
    menuItems.forEach(function(item) {
        item.classList.remove('menu__item--active');
        if (item.querySelector('a').getAttribute('href').substring(1) === currentSection) {
            item.classList.add('menu__item--active');
            item.querySelector('a').classList.add('menu__link--active');
        } else {
            item.querySelector('a').classList.remove('menu__link--active');
        }
    });

    // Add/remove --active class for desktop
    desktopMenuItems.forEach(function(item) {
        item.classList.remove('desktop-menu__item--active');
        if (item.querySelector('a').getAttribute('href').substring(1) === currentSection) {
            item.classList.add('desktop-menu__item--active');
            item.querySelector('a').classList.add('desktop-menu__link--active');
        } else {
            item.querySelector('a').classList.remove('desktop-menu__link--active');
        }
    });
});
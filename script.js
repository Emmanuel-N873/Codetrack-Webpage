const menuButton = document.querySelector('.menu-button');
const siteHeader = document.querySelector('header');
const menuIcon = menuButton?.querySelector('i');
const mobileBreakpoint = window.matchMedia('(max-width: 600px)');

function closeMenu() {
    if (!menuButton || !siteHeader || !menuIcon) return;

    siteHeader.classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    menuIcon.classList.replace('bx-x', 'bx-menu');
}

function toggleMenu() {
    if (!menuButton || !siteHeader || !menuIcon) return;

    const isOpen = siteHeader.classList.toggle('menu-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    menuIcon.classList.toggle('bx-menu', !isOpen);
    menuIcon.classList.toggle('bx-x', isOpen);
}

menuButton?.addEventListener('click', toggleMenu);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
});

document.querySelectorAll('#primary-navigation a').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

mobileBreakpoint.addEventListener('change', (event) => {
    if (!event.matches) closeMenu();
});

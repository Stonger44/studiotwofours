// Hamburger menu toggle for mobile
const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

const burgerMenuClosedHeight = 'max-h-0';
const burgerMenuOpenHeight = 'max-h-96';
const burgerMenuClosedPadding = 'py-0';
const burgerMenuOpenPadding = 'py-4';

toggle.addEventListener('click', () => {
  const isCollapsed = mobileMenu.classList.contains(burgerMenuClosedHeight);

  mobileMenu.classList.toggle(burgerMenuClosedHeight, !isCollapsed);
  mobileMenu.classList.toggle(burgerMenuOpenHeight, isCollapsed);

  mobileMenu.classList.toggle(burgerMenuClosedPadding, !isCollapsed);
  mobileMenu.classList.toggle(burgerMenuOpenPadding, isCollapsed);
});

// Listen for window resize to reset mobile menu if needed
window.addEventListener('resize', () => {
  // Use the same breakpoint as your mobile menu toggle visibility logic
  if (window.innerWidth >= 839) {
    // Ensure mobile menu is closed
    mobileMenu.classList.add(burgerMenuClosedHeight, burgerMenuClosedPadding);
    mobileMenu.classList.remove(burgerMenuOpenHeight, burgerMenuOpenPadding);
  }
});

// Auto-update year in footer
let yearClasses = document.getElementsByClassName("year");
Array.from(yearClasses).forEach(element => {
  element.textContent = new Date().getFullYear();
});

// Black bottom overlay to cover overscroll background
const overscrollCover = document.getElementById('overscroll-cover');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const footerRect = footer.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Only show overlay when part of footer is onscreen (i.e. during overscroll)
  if (footerRect.top < viewportHeight) {
    overscrollCover.classList.remove('hidden');

    // Cap the overlay to half the visible footer height
    const visibleFooterHeight = viewportHeight - footerRect.top;
    const halfHeight = Math.max(0, visibleFooterHeight * 0.8);

    overscrollCover.style.height = `${halfHeight}px`;
  } else {
    overscrollCover.classList.add('hidden');
    overscrollCover.style.height = '';
  }
});

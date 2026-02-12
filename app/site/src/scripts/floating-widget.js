/**
 * scroll-to-top.js
 * Handles visibility of floating buttons + scroll-to-top behavior
 */

document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  const floatingBtns = document.querySelectorAll('[id^="floating-btn"]');

  if (!scrollToTopBtn && floatingBtns.length === 0) return;

  function toggleVisibility() {
    const show = window.scrollY > 300;

    floatingBtns.forEach((btn) => {
      if (show) {
        btn.classList.remove('opacity-0', 'pointer-events-none');
        btn.classList.add('opacity-100');
      } else {
        btn.classList.add('opacity-0', 'pointer-events-none');
        btn.classList.remove('opacity-100');
      }
    });

    if (scrollToTopBtn) {
      if (show) {
        scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        scrollToTopBtn.classList.add('opacity-100');
      } else {
        scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        scrollToTopBtn.classList.remove('opacity-100');
      }
    }
  }

  // Run on load
  toggleVisibility();

  // Run on scroll
  window.addEventListener('scroll', toggleVisibility);

  // Scroll-to-top click only
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});

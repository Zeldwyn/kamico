/**
 * scroll-to-top.js
 * Handles the visibility and click behavior of the scroll-to-top button
 */

document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  if (!scrollToTopBtn) return;

  function toggleVisibility() {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      scrollToTopBtn.classList.add('opacity-100');
    } else {
      scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      scrollToTopBtn.classList.remove('opacity-100');
    }
  }

  // Run on page load
  toggleVisibility();

  // Run on scroll
  window.addEventListener('scroll', toggleVisibility);

  // Handle click
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});

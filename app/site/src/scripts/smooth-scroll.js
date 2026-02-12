/**
 * smooth-scroll.js
 * Handles smooth scrolling for anchor links with offset for fixed header
 */

function scrollToTarget(target, smooth = true) {
  const headerOffset = 0;
  const elementPosition = target.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: smooth ? 'smooth' : 'auto'
  });
}

function clearHash() {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}

document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return;

    // Extract the hash part: "/#contact" -> "#contact", "#contact" -> "#contact"
    const hash = href.startsWith('/#') ? href.substring(1) : href;
    const isHomePage = window.location.pathname === '/';

    // If linking to /#section from another page, let the browser navigate
    if (href.startsWith('/#') && !isHomePage) return;

    e.preventDefault();
    const target = document.querySelector(hash);
    if (target) {
      scrollToTarget(target);
      clearHash();
    }
  });
});

// Handle hash on page load (e.g. navigating from /#contact on another page)
if (window.location.hash) {
  const target = document.querySelector(window.location.hash);
  if (target) {
    scrollToTarget(target, false);
    clearHash();
  }
}

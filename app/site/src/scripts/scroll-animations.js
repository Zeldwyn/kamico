/**
 * Scroll-triggered animation handler
 * Adds 'active' class to fade-in elements when they enter the viewport
 */

// Configuration
const OBSERVER_OPTIONS = {
  root: null, // Use viewport as root
  rootMargin: '0px 0px -100px 0px', // Trigger 100px before element enters viewport
  threshold: 0.1 // Trigger when 10% of element is visible
};

/**
 * Initialize scroll animations using Intersection Observer
 */
function initScrollAnimations() {
  // Select all elements with fade-in classes
  const fadeElements = document.querySelectorAll(
    '.fade-in-left, .fade-in-right, .fade-in-up'
  );

  // Create observer instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Add 'active' class when element enters viewport
      // Remove 'active' class when element leaves viewport
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  }, OBSERVER_OPTIONS);

  // Observe each fade element
  fadeElements.forEach((element) => {
    observer.observe(element);
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
} else {
  // DOM already loaded
  initScrollAnimations();
}

// Initialize Lucide icons
lucide.createIcons();

const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu on button click
menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');

  const icon = menuButton.querySelector('i');
  icon.setAttribute(
    'data-lucide',
    mobileMenu.classList.contains('hidden') ? 'menu' : 'x'
  );
  lucide.createIcons();
});

// Close mobile menu when a link is clicked
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    const icon = menuButton.querySelector('i');
    icon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
  });
});

// Fade-in animation for sections
const elementsToAnimate = document.querySelectorAll('.fade-in-up');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.1 }
);
elementsToAnimate.forEach(el => observer.observe(el));

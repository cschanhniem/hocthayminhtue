document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const backdrop = document.getElementById('menu-backdrop');
  
  if (menuToggle && backdrop) {
    // Toggle menu on button click
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      backdrop.classList.toggle('active', !isExpanded);
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });
    
    // Close menu when clicking backdrop
    backdrop.addEventListener('click', () => {
      backdrop.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && backdrop.classList.contains('active')) {
        backdrop.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
});

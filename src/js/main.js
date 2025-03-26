document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      
      // Toggle aria-expanded
      const isExpanded = sidebar.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', isExpanded);
      
      // Lock body scroll when menu is open
      document.body.style.overflow = isExpanded ? 'hidden' : '';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const isClickInside = sidebar.contains(e.target) || menuToggle.contains(e.target);
      if (!isClickInside && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      }
    });
  }
});

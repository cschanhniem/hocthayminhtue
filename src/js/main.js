document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('hidden');
      // Toggle the hamburger/close icon
      this.textContent = sidebar.classList.contains('hidden') ? '☰' : '✕';
    });
  }
  
  // Tree toggles
  const toggleButtons = document.querySelectorAll('.toggle');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const node = this.closest('.tree-node');
      node.classList.toggle('collapsed');
      
      // Update the toggle icon
      const icon = this.querySelector('.icon');
      if (icon) {
        icon.textContent = node.classList.contains('collapsed') ? '+' : '-';
      }
    });
  });
  
  // Expand active node and its parents
  const activeNode = document.querySelector('.tree-node.active');
  if (activeNode) {
    // Expand active node
    activeNode.classList.remove('collapsed');
    
    // Expand all parent nodes
    let parent = activeNode.parentElement.closest('.tree-node');
    while (parent) {
      parent.classList.remove('collapsed');
      parent = parent.parentElement.closest('.tree-node');
    }
    
    // Update toggle icons
    const expandedNodes = document.querySelectorAll('.tree-node:not(.collapsed)');
    expandedNodes.forEach(node => {
      const icon = node.querySelector('.toggle .icon');
      if (icon) {
        icon.textContent = '-';
      }
    });

    // Scroll active node into view
    activeNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Initialize tree state
  document.querySelectorAll('.tree-node').forEach(node => {
    const isActive = node.classList.contains('active');
    const hasActiveChild = node.querySelector('.active');
    
    if (!isActive && !hasActiveChild) {
      node.classList.add('collapsed');
      const icon = node.querySelector('.icon');
      if (icon) icon.textContent = '+';
    } else {
      const icon = node.querySelector('.icon');
      if (icon) icon.textContent = '-';
    }
  });
});

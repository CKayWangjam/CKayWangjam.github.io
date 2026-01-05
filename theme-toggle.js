// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply theme on page load
if (currentTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Toggle function
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  
  // Save preference to localStorage
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

// Add event listener when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
});
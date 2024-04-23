const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarLeft = window.getComputedStyle(sidebar).getPropertyValue('left');
const newLeft = '0px';
sidebarToggle.addEventListener('click', () => {
  if (sidebarLeft === '-250px') {

    sidebar.style.left = newLeft;
  } else {
    sidebar.style.left = '0px';
  }
});

document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
    sidebar.style.left = '-250px';
    body.classList.remove('blur-background');
  }
});
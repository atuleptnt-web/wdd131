// Hamburger toggle
const menubutton = document.getElementById('menu-button');
const menuitems = document.getElementById('menu-items');

menubutton.addEventListener('click', () => {
  menuitems.classList.toggle('open');
  menubutton.textContent = menuitems.classList.contains('open') ? 'X' : '☰';
});

// Footer dynamic year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;
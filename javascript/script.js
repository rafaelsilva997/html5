const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const body = document.body;
const toggleTheme = document.getElementById('dark-mode-toggle');
const navLinks = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('section');

// menu hamburguer mobile
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// modo claro/escuro
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

toggleTheme.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// scroll suave e fechar menu no mobile
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    }
  });
});

// destaque da seção ativa no menu
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - section.clientHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const body = document.body;
const toggleTheme = document.getElementById('dark-mode-toggle');
const navLinks = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('section');

// Menu Mobile
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Dark/Light Mode
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Scroll Suave e fechar menu mobile
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
            menu.classList.remove('active');
        }
    });
});

// Ativar link menu conforme seção
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

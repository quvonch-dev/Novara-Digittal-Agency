const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');
const closeAnnouncement = document.getElementById('closeAnnouncement');
const scrollTop = document.getElementById('scrollTop');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  menuBtn.innerHTML = navMenu.classList.contains('show') ? '<i class="ri-close-line"></i>' : '<i class="ri-menu-3-line"></i>';
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show');
    menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';
  });
});

closeAnnouncement.addEventListener('click', () => {
  document.querySelector('.announcement').style.display = 'none';
});

window.addEventListener('scroll', () => {
  scrollTop.classList.toggle('show', window.scrollY > 550);
});

scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('.accordion-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    document.querySelectorAll('.accordion-item').forEach(el => {
      if (el !== item) el.classList.remove('active');
    });
    item.classList.toggle('active');
  });
});

const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => observer.observe(el));

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Xabaringiz yuborildi! Bu demo forma.');
  contactForm.reset();
});
